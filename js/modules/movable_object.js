// An abstract class 
// its main propose is to group the Player and the Enemy Class similary properties
// Player and Enemey class must inherit from this class
var MovableObject = function() {
	// only for the readability propose
	this.x = null;
	this.y = null;
};

// Draw the MovableObject on the screen with rescpect to its coordinates
MovableObject.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Dispatch event from the document element.
MovableObject.prototype.dispatch = function(eventName, eventData) {
	var customEvent = document.createEvent('Event');
	customEvent.initEvent(eventName, true, true);
	if(eventData) {
		customEvent.data = eventData;
	}
	document.dispatchEvent(customEvent);
};

// Return a random integer between the {min} and {max} 
MovableObject.prototype.getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};
