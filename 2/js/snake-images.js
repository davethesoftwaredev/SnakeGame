var Snake = Snake || {};

Snake.loadImages = function() {
	// set up images
	Snake.imageFiles[Snake.gridTypes.FLOOR] = ['img/floor.png', null];
	Snake.imageFiles[Snake.gridTypes.WALL] = ['img/wall.png', null];
	Snake.imageFiles[Snake.gridTypes.SNAKE] = ['img/snake.png', null];
	Snake.imageFiles[Snake.gridTypes.FOOD] = ['img/food.png', null];
	
	Snake.imagesLoaded = 0;
	
	for(var i = 0; i < Snake.imageFiles.length; i++) {
		var item = Snake.imageFiles[i];
		item[1] = new Image();
		item[1].src = item[0];
		item[1].onload = Snake.onImageLoaded;
	}
}

Snake.onImageLoaded = function() {
	Snake.imagesLoaded++;
}

Snake.waitForImages = function(callback) {
	window.setTimeout(function() {
		if(Snake.imagesLoaded != Snake.imageFiles.length) {
			window.setTimeout(arguments.callee, 0);
		}
		else {
			callback();
		}
	}, 0);
}