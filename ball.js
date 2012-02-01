ball=function(ctx)
{
	this.x=400;
	this.y=50;
	this.r=15;
	
	var dx=5;
	var dy=5;
	
	ctx.beginPath();
	ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
	ctx.fill();
	ctx.closePath();	
	
	this.draw=function (ctx)
	{
		if( this.x<0 || this.x>650)
		{
			dx=-dx;
		}
		if( this.y<0 || this.y>429)
		{
			dy=-dy;
		}
						
		if(firstHit=="true")
		{
			this.x=dx+this.x;	
			this.y=dy+this.y;
			//console.log("ball y:"+this.y);
		}
		else 
		{
			this.y=dy+this.y;
		}
		//console.log("this is x val:"+dx);
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
		ctx.fill();
		ctx.closePath();
	}
	
	this.ballCovertion=function(pos,side)
	{
		//console.log("position:"+pos+" side:"+side);
		if(side=="upper")
		{
			if(pos=="first")
			{
				dx=-8;
				dy=5;
			}
			else if(pos=="second")
			{
				dx=-4;
				dy=5;
			}
			else if(pos=="third")
			{
				dx=4;
				dy=5;
			}
			else if(pos=="fourth")
			{
				dx=8;
				dy=5;
			}
		}
		else if(side=="lower")
		{
			if(pos=="first")
			{
				dx=-8;
				dy=-5;
			}
			else if(pos=="second")
			{
				dx=-4;
				dy=-5;
			}
			else if(pos=="third")
			{
				dx=4;
				dy=-5;
			}
			else if(pos=="fourth")
			{
				dx=8;
				dy=-5;
			}
		}
		//dx=-dx;
		//dy=-dy;
	}
}

