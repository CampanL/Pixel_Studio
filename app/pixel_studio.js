
var pixel_studio = {

	init: function(){

		// couleurs de la palette
		
		let colors = 
		[
			new Color('color1', [0,0,0]),
			new Color('color2', [178,23,255]),
			new Color('color3', [5,84,255]),
			new Color('color4', [255,153,0]),
			new Color('color5', [255,20,119]),
			new Color('color6', [78,255,0])
		];
		this.palette_color.init( colors );

		// outils de dessin
		
		let tools = 
		[
			new Pencil(this.canvas),
			new Eraser(this.canvas)
		];

		this.palette_tool.init( tools );

		// canvas
		
		this.canvas.init('zone_dessin', 1600, 800, 64);

		console.log("Pixel studio is initiated and  ready");
	}
};

