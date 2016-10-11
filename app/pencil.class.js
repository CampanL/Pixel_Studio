class Pencil extends Tool
{

	constructor(canvas)
	{
		super('pencil','images/pencil.png');
		this.canvas = canvas;
	}
	on_mousedown(mouse_event)
	{
		pixel_studio.canvas.down=true
		this.on_mousemove(mouse_event);
	}
	on_mousemove(mouse_event)
	{
		if (pixel_studio.canvas.down == true) 
		{
		let color = pixel_studio.palette_color.get_selected();
		let position = this.canvas.screen_to_canvas(mouse_event);
		this.canvas.draw(position.x,position.y, color);
		}
	}
	on_mouseup(mouse_event)
	{
		pixel_studio.canvas.down=false;
	}
}