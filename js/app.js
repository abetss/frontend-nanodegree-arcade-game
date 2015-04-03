

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var player = new Player(2,5);

var enemy1 = new Enemy(6, player),
    enemy2 = new Enemy(5, player),
    enemy3 = new Enemy(4, player),
    enemy4 = new Enemy(7, player),
    allEnemies = []; 
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

document.addEventListener('onColission', function(e) {
    console.log('colision:');
    player.reset();
});
