var Snake = Snake || {};

Snake.gridTypes = { FLOOR: 0, WALL: 1, SNAKE: 2, FOOD: 3 };
Snake.grid = [];
Snake.imageFiles = [];	
Snake.snake = [];
Snake.moveX = 0;
Snake.moveY = 0;
Snake.addTimer = 0;
Snake.gameOver = false;

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
	var last = Snake.snake.length - 1;
	var lastPointX = Snake.snake[last].x;
	var lastPointY = Snake.snake[last].y
	
	// move snake's body
	for(var i = Snake.snake.length - 1; i > 0; i--) {
		Snake.snake[i].x = Snake.snake[i-1].x;
		Snake.snake[i].y = Snake.snake[i-1].y;		
		
		Snake.snake[i].redraw = true;
	}
	
	// move snake's head
	Snake.snake[0].x += Snake.moveX;
	Snake.snake[0].y += Snake.moveY;
	Snake.snake[0].redraw = true;

	if(Snake.addTimer > 0) {
		Snake.snake.push(new Snake.gridItem(lastPointX, lastPointY, Snake.gridTypes.SNAKE));
		Snake.addTimer--;
	}
	
	Snake.checkCollisions();
}

Snake.checkCollisions = function() {
	// check for collision with food
	if(Snake.snake[0].x == Snake.food.x && Snake.snake[0].y == Snake.food.y) {
		Snake.addTimer = 2;
		Snake.createFood();
	}
	
	// check for collision with wall tile
	if(Snake.getPositionType(Snake.snake[0].x, Snake.snake[0].y) == Snake.gridTypes.WALL) {
		Snake.gameOver = true;
	}
	
	// check for collision with snake
	for(var i = 1; i < Snake.snake.length; i++) {
		if(Snake.snake[0].x == Snake.snake[i].x && Snake.snake[0].y == Snake.snake[i].y) {
			Snake.gameOver = true;
		}
	}
}