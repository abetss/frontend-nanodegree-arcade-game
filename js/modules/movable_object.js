var MovableObject = function() {
};

// Draw the enemy on the screen, required method for game
MovableObject.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

MovableObject.prototype.dispatch = function(eventName, eventData) {
	var customEvent = document.createEvent('Event');
	customEvent.initEvent(eventName, true, true);
	if(eventData) {
		customEvent.data = eventData;
	}
	document.dispatchEvent(customEvent);
};

MovableObject.prototype.getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};
