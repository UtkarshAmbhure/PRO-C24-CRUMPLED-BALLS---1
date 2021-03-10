var paperObj,ground;
var wall1,wall2,wall3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground=new Ground(800,680,10,800);
paperObj=new PaperObj(56,46,55,55);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paperObj.display();
  
  drawSprites();
 
}



