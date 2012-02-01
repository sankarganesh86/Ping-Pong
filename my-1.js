				   var sankar;
				   var ctx;
				   var setInt;
				   
				   var lp;
				   var up;
				   var playBall;
				   var hitTest;
				   
				   //--------Initial Function--------------
				   function init()
				   {
				   		sankar=document.getElementById("sankar");
						ctx=sankar.getContext("2d");
						
						up=new upperPaddle(ctx);
						lp=new lowerPaddle(ctx);
						playBall=new ball(ctx);
						hitTest=new collision(up,lp,playBall);
						
						//console.log(up);
						//$('#sankar').keydown(downs);
						window.addEventListener('keydown',downs,true);//------used to add KeyBoard Event--------
						setInt=setInterval(draw,24);
				   }
				   //---------------------------------------
				   
				   
				   //-------Event Capture Function------
				   function downs(evt)
				   {
					  if(evt.keyCode==37&& lp.x> 0)
					  {
						lp.update(-20);
						up.update(-20);
					  }
					else if(evt.keyCode==39 && lp.x<450)
					  {
						lp.update(+20);
						up.update(+20);
					  }
				   }
				   //----------------------------------
				   
				   
				   //----------Function Used to Draw a Circle---------
				   function circle(x,y,r)
				   {
				   		ctx.beginPath();
						ctx.arc(ballX,ballY,r,0,Math.PI*2,true);	
						ctx.fill();
						ctx.closePath();
				   }
				   //--------------------------------------------------
				   
				   //------------Function Used to Draw a Rectangle----------
				   function rect(x,y,w,h)
				   {
				   		ctx.beginPath();
						ctx.rect(x,y,w,h);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();	
						//ctx.fillText("xaxis:"+y, 100, 100);
				   }
				   //--------------------------------------------------------
				  
				   
				   //------Function Used to call circle and rect function-----------
				   function draw()
				   {
						
						//---Base Rectangle----
						ctx.fillStyle="white";
						ctx.strokeStyle="black";
						rect(0,0,width,height);
						//---------------------
						
						
						
						//----------For Ball Movement----------
						ctx.fillText("xaxis:"+playBall.y, 100, 100);
						up.draw(ctx,0);
						lp.draw(ctx,0);
						playBall.draw(ctx);
						hitTest.checkCollision();
						//-------------------------------------
						
					
				   }
				   
				   