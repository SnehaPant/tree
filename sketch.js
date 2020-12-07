
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var tree;
var ground1;
var boy;
var stone;
var mango1,mago2,mango3,mango4,mango5;
var rope;;
function preload()
{
  boy=loadImage('boy.png')
  tree=loadImage('tree.png')
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  ground1=new Ground()
  stone=new Stone(300,400,20)
  mango1=new Mango(700,300,20)
  mango2=new Mango(600,350,20)
  mango3=new Mango(750,250,20)
  mango4=new Mango(800,320,20)
  mango5=new Mango(650,250,20)
  rope=new Rope(stone.body,{x:250,y:500})
	Engine.run(engine);
 
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  
  ground1.display()
  stone.display()
  imageMode(CENTER); 
  image(boy, 300,550,200,200);
  imageMode(CENTER); 
  image(tree, 700,400,400,400);
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  rope.display()
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  keyPressed()
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly()
}
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
  if(keyCode===32){
      Matter.Body.setPosition(stone.body,{x:235,y:420})
      launcherObject.attach(stone.body)
  }
}
