pixel_studio.palette = {

	colors: [],
	color_selected:null,
	select_color: function(color)
	{
		this.color_selected = color;
		$("#colors li").removeClass('selected')
					   .eq(color.id)
					   .addClass('selected')
		},

	init_color: function(colors)
	{
		this.colors = colors
		let $one = $('#colors li').detach();
		for (let i=0;i<colors.length;i++) 
		{
			let $li = $one.clone(),
				color = this.colors[i];

				color.id = i;

			$li.css("background-color",colors[i].to_string());
			$li.attr("title",colors[i].name);
			$('#colors').append($li);
		}
		this.select_color(this.colors[0]);
	}
}