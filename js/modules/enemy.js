
// Enemy of the player object. While it moves it checks for collision with player object
// paramter speed: speed of the enemy movemenet, effective range is between 2 to 9
// parameter player: an object of the Player class, enemy object utilizes when checking for collision
// Enemy inherits from MovableObject Class
var Enemy = function(speed, player) {
	MovableObject.call(this);

	this.columnPosition = -1;
	// while the effective speed an enemy object can have is between 200 too 900, we are
	// limiting it to integers between 2 to 9 to limit the speed variation
	this.speed = speed * 100;
	this.player = player;
    this.sprite = 'images/enemy-bug.png';

    this.init();
};

Enemy.prototype = Object.create(MovableObject.prototype);
Enemy.prototype.constructor = Enemy;

// Initiate the enemy  with a random inital row and the -1 column then calculates the the enemy x and y margin 
// with respect to the assigned row and column
Enemy.prototype.init = function() {
	this.rowPosition = this.getRandomInt(1,5);
	this.calculatePosition();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.moveRight(dt);
    if(this.isColideWithPlayer()) {
    	this.dispatch('onCollision');
    }
};

// Checks whether the enemy object and the player object has colided
// returns a bolean indicating that
Enemy.prototype.isColideWithPlayer = function() {
	var playHalfWidth = player.porpotion.width / 2;
	if(this.rowPosition === this.player.rowPosition && 
		(this.x > player.x - playHalfWidth && this.x < player.x + playHalfWidth)) {
		return true;
	}
	else {
		return false;
	}
};


// Reset the enemy object position to the initial column (-1) and a randome row
Enemy.prototype.reset = function() {
	this.rowPosition = this.getRandomInt(1,5);
	this.columnPosition = -1;
	this.calculatePosition();
};

// Move the enemey object to the right with respect to its speed
// if the enemy move out of the board it will reset its position
Enemy.prototype.moveRight = function(dt) {
	this.x = this.x + (dt * this.speed);
	if(this.x > (5 * 101)) {
		this.reset();
	}
};

// Calculates the the enemy x and y margin  with respect to the assigned row and column
Enemy.prototype.calculatePosition = function() {
	this.x = this.columnPosition * 101;
	this.y = this.rowPosition * 83 - 20;
};

