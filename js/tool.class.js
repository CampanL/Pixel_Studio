class Tool
{
	constructor(name, src)
	{
	this.name = name;
	this.src = src;
	}
	source()
	{
		return "url("+this.src+")";
	}
}