

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var side1;
var side2;
var ground;



function setup() {
	createCanvas(1000,350);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,340,1200,10);
	side1=new Ground(900,300,10,70);
	side2=new Ground(750,300,10,70);

	ball_options=
	{
		restitution:0.5,
	}
	ball=Bodies.circle(100,20,20,ball_options);
	World.add(world,ball);
	ellipseMode(RADIUS);
	rectMode(CENTER);
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  side1.show();
  side2.show();

  ellipse(ball.position.x,ball.position.y,20)
 
 Engine.update(engine);
  
	
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}

