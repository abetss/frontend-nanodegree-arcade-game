// Enemies our player must avoid
var Enemy = function(initRow, speed) {
	this.columnPosition = 0;
	this.rowPosition = initRow;
	this.calculateInitPosition();
	this.speed = speed * 100;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.moveRight(dt);
    
}

Enemy.prototype.moveRight = function(dt) {
	this.x = this.x + (dt * this.speed)
}

Enemy.prototype.calculateInitPosition = function() {
	this.x = this.columnPosition * 101;
	this.y = this.rowPosition * 83 - 12;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}