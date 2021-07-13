
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImage



function preload()
{
	dustbinImage = loadImage("sprites/dustbingreen.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
	
	
	dustbin1 = new Dustbin (650,660,200,20);
	dustbin2 = new Dustbin (550,633,20,75);
	dustbin3 = new Dustbin (750,633,20,75);
	ground = new Ground (300,680,1500,20);
	ball = new Paper (50,600,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  drawSprites();

  dustbin1.displayImage();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  ball.display();
  circle(ball.body.position.x,ball.body.position.y,70);

 
  
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:500});
	}
}



