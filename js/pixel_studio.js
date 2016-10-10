var pixel_studio = {
	init: function()
	{
		//colors
		let colors = 
		[
		new Color('color-1', [0,0,0]),
		new Color('color-2', [178,23,255]),
		new Color('color-3', [5,84,255]),
		new Color('color-4', [255,153,0]),
		new Color('color-5', [255,20,119]),
		new Color('color-6', [78,255,0]),
		];
		//tools
		let tools=
		[
		new Tool("pen", "image/pencil.png"),
		new Tool("eraser", "image/eraser.png")
		];
		this.palette_tool.init(tools)
		this.palette_color.init(colors);
		console.log("pixel studio is ready");
		//canvas
		this.canvas.init("canvas", 1600, 800, 32);
	}
};