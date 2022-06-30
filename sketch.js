//constants for physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

//variables 
var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){
  //loads image for boy 
	boy=loadImage("boy.png");
}

function setup() {
  
  //draws canvas
	createCanvas(1300, 600);
	
  //creates our own physics world and engine
  engine = Engine.create();
	world = engine.world;

  //creates variables 
	stone = new Stone(235,420,30); 

	mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1140,150,40);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);
	mango11 = new Mango(1120,50,40);
	mango12 = new Mango(900,160,40);

	tree = new Tree(1050,580);

	ground = new Ground(width/2,600,width,20);

  LaunCher = new launcher(stone.body,{x:235,y:420});

  //runs physics engine
	Engine.run(engine);
}

function draw() {

  background(230);
  
  //updates physics engine
  Engine.update(engine);
  
  //code for text
  textSize(25);
  text("Hit the mangoes with the stone!!",50 ,50);
  
  //displays boys image on canvas
  image(boy ,200,340,200,300);
  
  //displays the varibles on canvas
  tree.display();

  stone.display();

  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stone.display();
  
  ground.display();

  LaunCher.display();

  //detects collision
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
}

//drags the stone when mouse is dragged  
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

//release stone when mouse is released
function mouseReleased(){
	LaunCher.fly(); 
}

//detects collision
function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  	if(distance<=lmango.r+lstone.r){
  	  Matter.Body.setStatic(lmango.body,false);
    }

}