var Snake = Snake || {};

Snake.loadGrid = function() {
	// set up grid (800x600 resolution gives us a 20x15 grid of images 40x40 pixels
	Snake.gridWidth = 20;
	Snake.gridHeight = 15;
	Snake.gridElementWidth = Snake.canvasElement.width / Snake.gridWidth;
	Snake.gridElementHeight = Snake.canvasElement.height / Snake.gridHeight;
	
	for(var y = 0; y < Snake.gridHeight; y++) {
		for(var x = 0; x < Snake.gridWidth; x++) {
			Snake.grid.push(new Snake.gridItem(x,y, Snake.gridTypes.FLOOR));
		}
	}
}

Snake.drawGrid = function() {
	for(var i = 0; i < Snake.grid.length; i++) {
		Snake.grid[i].draw(Snake.context);
	}
}

Snake.gridItem = function(x, y, type) {
	var self = this;
	
	this.redraw = true;
	this.x = x;
	this.y = y;
	this.type = type;
	
	// draws this grid tile at its proper location
	this.draw = function(context) {
		if(self.redraw) {
			var img = Snake.imageFiles[self.type][1];
			context.drawImage(img, 0, 0, img.width, img.height, self.x * Snake.gridElementWidth, self.y * Snake.gridElementHeight, Snake.gridElementWidth, Snake.gridElementHeight);	
			self.redraw = false;
		}
	}
}