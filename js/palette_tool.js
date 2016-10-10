pixel_studio.palette_tool = 
{
	tool: [],
	tool_selected:null,
	select_tool: function(tool)
	{
		this.tool_selected=tool;
		$("#tools li").removeClass('selected')
					   .eq(tool.id)
					   .addClass('selected')
	},

	init:function(tools)
	{
		this.tools=tools
		let $one=$("#tools li").detach();
		for(let j=0;j<tools.length;j++)
		{
			let $li = $one.clone(),
				tool = this.tools[j];

				tool.id=j;

				$li.css("background-image",tools[j].source());
				$li.attr("title",tools[j].name);
				$('#tools').append($li);
		}
		this.select_tool(this.tools[0]);
		var self=this;
		$('#tools').on('click','li',function()
		{
			let index=$('#tools li').index(this);
			self.select_tool(self.tools[index]);
		});
	}
}