
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	boy = new Boy(150,425,150,250);
	stone = new Stone(150,325,50,50);
 	ground = new Ground(500,500,1200,20);
	tree = new Tree(600,300,300,400);
	mango1 = new Mango(600,475,50,50);
	mango2 = new Mango(600,475,40,40);
	mango3 = new Mango(600,475,50,50);
	mango4 = new Mango(600,475,40,40);
	mango5 = new Mango(600,475,50,50);
	mango6 = new Mango(600,475,40,40);

	chain = new Chain(stone.body, {x:175 , y:360});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  drawSprites();
 ground.display();
 boy.display();
 stone.display();
 boy.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();

}
function mouseDragged (){
	Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});  
  }
  function mouseReleased() {
	  chain.fly();
	}
  


