collision=function(up,lp,ball)
{
	var upperPaddle=up;
	var lowerPaddle=lp;
	var ballObj=ball;
	
	this.checkCollision=function()
	{
		//--------Used to Take the Upper and Lower Paddle Range---------
		var lowerY=lowerPaddle.y-lowerPaddle.height;
		var lowerX=lowerPaddle.x+lowerPaddle.width;
		
		var upperY=upperPaddle.y+upperPaddle.height+15;
		var upperX=upperPaddle.x+upperPaddle.width;
		//--------------------------------------------------------------
		
		//-----------Used to Calculate Lower Paddle hit--------------
		if(ball.y>lowerY && ball.x<lowerX && ball.x>lowerPaddle.x)
		{
			
			firstHit="true";
			var parts=(lowerPaddle.width/4);
			
			var firstPart=(lowerPaddle.x+parts);
			var secPart=(lowerPaddle.x+(parts*2));
			var thirdPart=(lowerPaddle.x+(parts*3));
			var fourthPart=(lowerPaddle.x+(parts*4));
			
			if(ball.x<firstPart)
			{
				ballObj.ballCovertion("first","lower");
				//console.log("Ball Hit the First Part");
			}
			else if(ball.x<secPart&&ball.x>firstPart)
			{
				ballObj.ballCovertion("second","lower");
				//console.log("Ball Hit the Second Part");
			}
			else if(ball.x<thirdPart&&ball.x>secPart)
			{
				ballObj.ballCovertion("third","lower");
				//console.log("Ball Hit the Third Part");
			}
			else if(ball.x<fourthPart&&ball.x>thirdPart)
			{
				ballObj.ballCovertion("fourth","lower");
				//console.log("Ball Hit the Fourth Part");
				//first 
			}
		}   
		else if(ball.y>lowerY && ball.x>lowerX )
		{
			clearInterval(setInt);
			$('#gOver').show();
			//console.log("Maxium Boundry Reached Lower Paddle");
		}
		else if(ball.y>lowerY && ball.x<lowerPaddle.x)
		{
			clearInterval(setInt);
			$('#gOver').show();
			//console.log("Minimum Boundry Reached Lower Paddle");
		}
		//-----------------------------------------------------------
		
		
		//-------Used to Calculate Upper Paddle hit-----------
		if(ball.y<upperY && ball.x<upperX && ball.x>upperPaddle.x)
		{
			firstHit="true";
			
			var parts=(upperPaddle.width/4);
			var firstPart=(upperPaddle.x+parts);
			var secPart=(upperPaddle.x+(parts*2));
			var thirdPart=(upperPaddle.x+(parts*3));
			var fourthPart=(upperPaddle.x+(parts*4));
			
			if(ball.x<firstPart)
			{
				ballObj.ballCovertion("first","upper");
				//console.log("Ball Hit the First Part");
			}
			else if(ball.x<secPart&&ball.x>firstPart)
			{
				ballObj.ballCovertion("second","upper");
				//console.log("Ball Hit the Second Part");
			}
			else if(ball.x<thirdPart&&ball.x>secPart)
			{
				ballObj.ballCovertion("third","upper");
				//console.log("Ball Hit the Third Part");
			}
			else if(ball.x<fourthPart&&ball.x>thirdPart)
			{
				ballObj.ballCovertion("fourth","upper");
				//console.log("Ball Hit the Fourth Part");
			}
			
			//console.log("Ball hit the Upper Paddle");
		}
		else if(ball.y<upperY && ball.x>upperX) 
		{
			clearInterval(setInt);
			$('#gOver').show();
			//console.log("Maximum Boundry Reached Upper Paddle");
		}
		else if(ball.y<upperY && ball.x<upperPaddle.x)
		{
			clearInterval(setInt);
			$('#gOver').show();
			//console.log("Minimun Boundry Reached Upper Paddle");
		}
		//----------------------------------------------------
		
		
	}
}