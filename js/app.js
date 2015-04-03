


    // place the player object in a variable called player
    // The app requires the variable name to be "player", otherwise it won't display the player on the board
var player = new Player(2,5),

    // initializing couple of enemy object with varying speed
    enemy1 = new Enemy(6, player),
    enemy2 = new Enemy(5, player),
    enemy3 = new Enemy(4, player),
    enemy4 = new Enemy(3, player),

    // the app read enemyobject from allEnemies array and display them on the board
    allEnemies = [];

// place all enemy objects in an array called allEnemies
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);


// This listens for key presses and sends the keys to your
// player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// This listens for when collision happens and resets the player
document.addEventListener('onCollision', function(e) {
    player.reset();
});