var Snake = Snake || {}

Snake.gridTypes = { FLOOR: 0, WALL: 1, SNAKE: 2, FOOD: 3 };
Snake.grid = [];
Snake.imageFiles = [];	

Snake.init = function (canvas, level, loadingCompleteCallback) {
	// load canvas
	Snake.canvasElement = document.getElementById(canvas);
	Snake.context = this.canvasElement.getContext("2d");
	
	Snake.loadImages();
	Snake.loadGrid();
	
	loadingCompleteCallback();
	//Snake.waitForImages(loadingCompleteCallback);
}
