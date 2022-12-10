var canvas = new fabric.Canvas('myCanvas')

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img) 
    {
        player_objects=Img;
        player_objects.scaleToWidth(50);
        player_objects.scaleToHeight(50);
        player_objects.set({
        top:hole_y,
        left:hole_x
    }); 
    canvas.add(player_objects);
    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img) 
    {
        
		ball_objects=Img;
        ball_objects.scaleToWidth(50);
        ball_objects.scaleToHeight(50);
        ball_objects.set({
        top:ball_y,
        left:ball_x
    }); 
    canvas.add(ball_objects);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((hole_x == ball_x)&&(hole_y == ball_y)){
		canvas.remove(ball_objects)
		document.getElementById("hd3").innerHTML="You Have Hit the Goal!!!"
		document.getElementById("myCanvas").style.borderColor="red"
		
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y>=0) {
			ball_y=ball_y-20
			canvas.remove(ball_objects)
		new_image();
		 }
	}

	function down()
	{
		if (ball_y>=0) {
			ball_y=ball_y+20
			canvas.remove(ball_objects)
		new_image();
		 }
	}

	function left()
	{
		if(ball_x >5) {
			ball_x=ball_x-20
			canvas.remove(ball_objects)
		new_image();
		 }
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if (ball_y>=0) {
				ball_y=ball_y+20
				canvas.remove(ball_objects)
			new_image();
			 }
		}
	}
	


