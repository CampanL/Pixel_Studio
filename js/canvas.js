pixel_studio.canvas=
{
	screen:
	{
		width:0,
		height:0
	},

	pixel_dimension: 0,

	nb_pixel_width: 0,
	context: null,
	/**
	 * Préparation de la zone de dessin
	 * @param  {string} div_id         [Nom de la div dans laquelle sera placé le canvas]
	 * @param  {number} width          [Largeur max du canvas en pixel ecran]
	 * @param  {number} height         [Hauteur max en pixel ecran]
	 * @param  {number} nb_pixel_width [nombre de pixel en largeur]
	 */
	init: function(div_id, width, height, nb_pixel_width)
	{
		this.div_id = div_id;
		this.screen.width = width;
		this.screen.height = height;
		this.nb_pixel_width= nb_pixel_width;
		this.pixel_dimension = width/nb_pixel_width;
		console.log(this);
		$('#'+div_id).append("<canvas id='my_canvas' width='"+width+"' height='"+height+"' ></canvas>");

		let c = document.getElementById('my_canvas')
		this.context=c;
		let ctx = c.getContext("2d");
	}
};