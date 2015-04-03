var Player = function(initColumn, initRow) {
	this.columnPosition = initColumn;
	this.rowPosition = initRow;
    this.calculatePosition();
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function(dt) {
	this.calculatePosition();
}

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(input) {
	switch(input) {
		case 'up':
			this.tryMoveUp();
			break;
		case 'down':
			this.tryMoveDown();
			break;
		case 'left':
			this.tryMoveLeft();
			break;
		case 'right':
			this.tryMoveRight();
			break;
		default:
			break;
	}  
}

Player.prototype.calculatePosition = function(input) {
	this.x = this.columnPosition * 101;
	this.y = this.rowPosition * 83 - 12;
}

Player.prototype.tryMoveUp = function() {
	if(this.rowPosition > 0) {
		this.rowPosition--;
	}
}

Player.prototype.tryMoveDown = function() {
	if(this.rowPosition < 5) {
		this.rowPosition++;
	}
}

Player.prototype.tryMoveLeft = function() {
	if(this.columnPosition > 0) {
		this.columnPosition--;
	}
}

Player.prototype.tryMoveRight = function() {
	if(this.columnPosition < 4) {
		this.columnPosition++;
	}
}


