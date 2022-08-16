
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var chaot;
var chaod;
var chaoe;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bola = Bodies.circle (60, 60, 15);
	World.add (world, bola);

	chaot = new Chao (width/2, 670, width, 20);

	chaoe = new Chao (1025, 600, 20, 120);

	chaod = new Chao (700, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  chaot.draw();
  chaoe.draw();
  chaod.draw();

  ellipse (bola.position.x, bola.position.y, 30)
  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW){
  Matter.Body.applyForce (bola, {x:0, y:0}, {x:0.032, y:-0.032});
  }
}



