lowerPaddle = function (ctx)
{
	this.height=20;
	this.width=200;
	this.x=0;
	this.y=430;
	var lowerImage = new Image();
	
	var movement;
	//ctx.fillText("xaxis:"+this.y, 100, 100);
	
	
	/*ctx.fillStyle="red";
	ctx.strokeStyle="black";
	
	ctx.beginPath();
	ctx.rect(this.x,this.y,this.width, this.height);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();	*/
	
	this.draw=function(ctx,movement)
	{
		lowerImage.src = "paddle.jpg";
		ctx.drawImage(lowerImage, this.x, this.y);
		/*ctx.beginPath();
		ctx.rect(this.x,this.y,this.width, this.height);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();	*/
	}
	
	this.update=function(movement)
	{
		this.x=this.x+movement;
	}
	
}