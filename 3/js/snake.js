var Snake = Snake || {};

Snake.gridTypes = { FLOOR: 0, WALL: 1, SNAKE: 2, FOOD: 3 };
Snake.grid = [];
Snake.imageFiles = [];	
Snake.snake = [];
Snake.moveX = 0;
Snake.moveY = 0;

Snake.init = function (canvas, level, loadingCompleteCallback) {
	// load canvas
	Snake.canvasElement = document.getElementById(canvas);
	Snake.context = this.canvasElement.getContext("2d");
	
	Snake.loadImages();
	Snake.loadGrid(level);
	Snake.createFood();
	Snake.registerEvents();
	
	Snake.waitForImages(loadingCompleteCallback);
}

Snake.move = function() {
	if(Snake.addTimer > 0) {
		var last = Snake.snake.length - 1;
		Snake.snake.push(new gridItem(Snake.snake[last].x, Snake.snake[last].y, Snake.gridTypes.SNAKE));
		Snake.addTimer--;
	}

	Snake.snake[0].x += Snake.moveX;
	Snake.snake[0].y += Snake.moveY;
	
	Snake.snake[0].redraw = true;
	
	if(Snake.snake[0].x == Snake.food.x && Snake.snake[0].y == Snake.food.y) {
		Snake.addTimer = 2;
	}
}