var Snake = Snake || {};

Snake.KEY_LEFT_ARROW = 37;
Snake.KEY_UP_ARROW = 38;
Snake.KEY_RIGHT_ARROW = 39;
Snake.KEY_DOWN_ARROW = 40;

Snake.KEY_W = 87;
Snake.KEY_A = 65;
Snake.KEY_S = 83;
Snake.KEY_D = 68;

Snake.registerEvents = function() {
	window.addEventListener( "keydown", Snake.keyDown, false);
}

Snake.keyDown = function(evt) {
	if (evt.keyCode == Snake.KEY_LEFT_ARROW || evt.keyCode == Snake.KEY_A) {
		Snake.moveX = -1;
		Snake.moveY = 0;
	}
	else if (evt.keyCode == Snake.KEY_RIGHT_ARROW || evt.keyCode == Snake.KEY_D) {
		Snake.moveX = 1;
		Snake.moveY = 0;	
	}
	else if (evt.keyCode == Snake.KEY_UP_ARROW || evt.keyCode == Snake.KEY_W) {
		Snake.moveX = 0;
		Snake.moveY = -1;
	}
	else if (evt.keyCode == Snake.KEY_DOWN_ARROW || evt.keyCode == Snake.KEY_S) {
		Snake.moveX = 0;
		Snake.moveY = 1;
	}
}