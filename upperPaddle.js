upperPaddle = function (ctx)
{
	this.height=20;
	this.width=200;
	this.x=0;
	this.y=0;
	
	
	var movement;
	
	ctx.fillStyle="red";
	ctx.strokeStyle="black";
	
	ctx.beginPath();
	ctx.rect(this.x,this.y,this.width, this.height);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();	
	
	this.draw=function(ctx,movement)
	{
		
		ctx.fillText("xaxis:"+movement, 100, 100);
		
		ctx.fillStyle="red";
		ctx.strokeStyle="black";
		
		ctx.beginPath();
		ctx.rect(this.x,this.y,this.width, this.height);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();	
	}
	
	this.update=function(movement)
	{
		this.x=this.x+movement;
	}
	
}