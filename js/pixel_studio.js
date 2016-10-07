var pixel_studio = {
	init: function()
	{
		let colors = 
		[
		new Color('color-1', [0,0,0]),
		new Color('color-2', [178,23,255]),
		new Color('color-3', [5,84,255]),
		new Color('color-4', [255,153,0]),
		new Color('color-5', [255,20,119]),
		new Color('color-6', [78,255,0]),
		];
		this.palette.init_color(colors);
		console.log("pixel studio is ready")
	}
};