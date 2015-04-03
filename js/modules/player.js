var Player = function(initColumn, initRow) {
	MovableObject.call(this);

	this.initColumn = initColumn;
	this.initRow = initRow;
    this.sprite = 'images/char-boy.png';
    this.porpotion = {
    	width: 150,
    	height: 200
    };

    this.init();
};

Player.prototype = Object.create(MovableObject.prototype);
Player.prototype.constructor = Enemy;

Player.prototype.init = function() {
	this.columnPosition = this.initColumn;
	this.rowPosition = this.initRow;
	this.calculatePosition();
};

Player.prototype.update = function(dt) {
	this.calculatePosition();
};


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
};

Player.prototype.reset = function() {
	this.columnPosition = this.initColumn;
	this.rowPosition = this.initRow;
};

Player.prototype.calculatePosition = function(input) {
	this.x = this.columnPosition * 101;
	this.y = this.rowPosition * 83 - 12;
};

Player.prototype.tryMoveUp = function() {
	if(this.rowPosition > 0) {
		this.rowPosition--;
	}
	if(this.rowPosition === 0) {
		player.onWin();
	}

};

Player.prototype.tryMoveDown = function() {
	if(this.rowPosition < 5) {
		this.rowPosition++;
	}
};

Player.prototype.tryMoveLeft = function() {
	if(this.columnPosition > 0) {
		this.columnPosition--;
	}
};

Player.prototype.tryMoveRight = function() {
	if(this.columnPosition < 4) {
		this.columnPosition++;
	}
};

Player.prototype.onWin = function() {
	this.reset();
};

