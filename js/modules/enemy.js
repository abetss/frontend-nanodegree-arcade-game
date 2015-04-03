// Enemies our player must avoid
var Enemy = function(initRow, speed, player) {
	this.columnPosition = -1;
	this.rowPosition = initRow;
	this.calculateInitPosition();
	this.speed = speed * 100;
	this.player = player;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.moveRight(dt);
    if(this.isColideWithPlayer()) {
    	this.dispatch('onColission');
    }
};

Enemy.prototype.dispatch = function(eventName, eventData) {
	var customEvent = document.createEvent('Event');
	customEvent.initEvent(eventName, true, true);
	if(eventData) {
		customEvent.data = eventData;
	}
	document.dispatchEvent(customEvent);
};

Enemy.prototype.isColideWithPlayer = function() {
	if(this.x === this.player.x && this.y === this.player.y) {
		return true;
	}
	else {
		return false;
	}
};

Enemy.prototype.reset = function() {
	this.rowPosition = this.getRandomInt(1,4);
	this.columnPosition = -1;
	this.calculateInitPosition();
};

Enemy.prototype.getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

Enemy.prototype.moveRight = function(dt) {
	this.x = this.x + (dt * this.speed);
	if(this.x > (5 * 101)) {
		this.reset();
	}
};

Enemy.prototype.calculateInitPosition = function() {
	this.x = this.columnPosition * 101;
	this.y = this.rowPosition * 83 - 12;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};