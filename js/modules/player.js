
// Player is controled by human through interaction with keyboard. 
// parameter initColumn: the initial column position
// parameter initRow: the initial row position
// Player inherits from MovableObject Class
var Player = function(initColumn, initRow) {
	MovableObject.call(this);

	// keeping ths initial row and column position in order to use it later
	// when the player is reset
	this.initColumn = initColumn;
	this.initRow = initRow;

    this.sprite = 'images/char-boy.png';

    // the player porpotion is its approximate size on the board, its will be used by
    // the enemy object when the enemy object is checking for collision
    this.porpotion = {
    	width: 150,
    	height: 200
    };

    this.init();
};

Player.prototype = Object.create(MovableObject.prototype);
Player.prototype.constructor = Enemy;

// Initiate the player by positioning it at the initColumn and initRow, then calculates the the 
// player x and y margin with respect to the assigned row and column
Player.prototype.init = function() {
	this.columnPosition = this.initColumn;
	this.rowPosition = this.initRow;
	this.calculatePosition();
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
	this.calculatePosition();
};

// Checks the key pressed by the user and calls the approperiate move function
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

// Reset the player object position to the initial column and initial row
Player.prototype.reset = function() {
	this.columnPosition = this.initColumn;
	this.rowPosition = this.initRow;
};

// Calculates the the enemy x and y margin  with respect to the assigned row and column
Player.prototype.calculatePosition = function(input) {
	this.x = this.columnPosition * 101;
	this.y = this.rowPosition * 83 - 12;
};

// Moves the player one row up and if after the moving the player is position at topest row 
// declare it as a win
Player.prototype.tryMoveUp = function() {
	this.rowPosition--;

	if(this.rowPosition === 0) {
		player.onWin();
	}

};

// Moves the player one row down only if the player is not currently at the lowest row
Player.prototype.tryMoveDown = function() {
	if(this.rowPosition < 5) {
		this.rowPosition++;
	}
};

// Moves the player one column left only if the player is not currently at the first column
Player.prototype.tryMoveLeft = function() {
	if(this.columnPosition > 0) {
		this.columnPosition--;
	}
};

// Moves the player one column right only if the player is not currently at the last column
Player.prototype.tryMoveRight = function() {
	if(this.columnPosition < 4) {
		this.columnPosition++;
	}
};

// When the player wins, its will be reset
Player.prototype.onWin = function() {
	this.reset();
};

