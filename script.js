
//A bunch of variables
var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,2,2,1,1,1,3,1,1,1,2,2,2,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
    [2,1,1,2,1,1,2,2,2,2,2,2,2,1,1,2,1,1,2],
    [2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
    [2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2],
    [2,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,2],
    [2,1,1,1,1,1,2,1,1,3,1,1,2,1,1,1,1,1,2],
    [2,1,3,1,1,1,2,1,1,1,1,1,2,1,1,1,3,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
]; 

var score = 0;

var pacman = {
    x: 1,
    y: 1,
};

var ghost = {
    x: 9,
    y: 6,
};

//defining the world 

function displayWorld () {
    var output = '';

    for (var i = 0; i <world.length; i++) {
        output += "<div class='row'>";
        for (var j = 0; j<world[i].length; j++) {
            if (world[i][j] == 3) {
                output += "<div class='cherry'></div>";
            }
            else if (world[i][j] == 2) {
                output += "<div class='brick'></div>";
            }
            else if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            }
            else if (world[i][j] == 0) {
                output += "<div class='empty'></div>";
            }
        }
        output +="</div>";
    }     
    document.getElementById('world').innerHTML = output;
}


//setting the characters
function displayPacman () {
    document.getElementById('pacman').style.top = 
    pacman.y * 20 + 'px';
    document.getElementById('pacman').style.left = 
    pacman.x * 20 + 'px';
}

function  displayGhost () {
    document.getElementById('ghost').style.top = 
    ghost.y * 20 + 'px';
    document.getElementById('ghost').style.left = 
    ghost.x * 20 + 'px';
}

function displayScore () {
    document.getElementById('score').innerHTML = "Score: "+ score; 
}

//Lost of lives if touches the ghost  - NOT WORKING AT THE MOMENT 
function byeLives() {
    var actualLives = 3;
    var live = document.querySelector("live");
    if ((ghost.y === pacman.y) && (ghost.x === pacman.x)) {
        alert("You lost 1 live, be careful!");
        live.innerHTML = actualLives--;
        console.log(actualLives);
    }
}

byeLives();
displayGhost();
displayWorld();
displayPacman();
displayScore();

//Set moving features of pacman and walls limits

document.onkeydown = function(e){
    if(e.keyCode == 37){   
        if(world[pacman.y][pacman.x - 1] != 2){
            pacman.x--;
        }
    }
    if(e.keyCode == 39){    
        if(world[pacman.y][pacman.x + 1] != 2){
            pacman.x++;
        }
    }
    if(e.keyCode == 40){
        if(world[pacman.y +1][pacman.x] != 2){
            pacman.y++;
        }
    } 
    if(e.keyCode == 38){
        if(world[pacman.y - 1][pacman.x] != 2){
            pacman.y--;
        }
    } 

    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score+=10;
        displayWorld();
        displayScore();
    }

    else if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score+=50;
        displayWorld();
        displayScore();
    }

    displayPacman();
}



