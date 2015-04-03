// Enemies our player must avoid
var Enemy = function(speed, player) {
	MovableObject.call(this);

	this.columnPosition = -1;
	this.speed = speed * 100;
	this.player = player;
    this.sprite = 'images/enemy-bug.png';

    this.init();
};

Enemy.prototype = Object.create(MovableObject.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.init = function() {
	this.rowPosition = this.getRandomInt(1,5);
	this.calculatePosition();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.moveRight(dt);
    if(this.isColideWithPlayer()) {
    	this.dispatch('onColission');
    }
};

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

Enemy.prototype.reset = function() {
	this.rowPosition = this.getRandomInt(1,5);
	this.columnPosition = -1;
	this.calculatePosition();
};

Enemy.prototype.moveRight = function(dt) {
	this.x = this.x + (dt * this.speed);
	if(this.x > (5 * 101)) {
		this.reset();
	}
};

Enemy.prototype.calculatePosition = function() {
	this.x = this.columnPosition * 101;
	this.y = this.rowPosition * 83 - 20;
};

