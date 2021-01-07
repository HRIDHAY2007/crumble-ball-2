const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1;
var basket2;
var basket3;
var paper;
var ground;
var basketI;
var paperspriteI;
var papersprite;
var dustbinSprite;
var dustbinSpriteI;
function preload()
{
  paperspriteI= loadImage('paper.png')
   dustbinSpriteI = loadImage('dustbingreen.png')
}

function setup() {
	createCanvas(1500, 1200);


	engine = Engine.create();
	world = engine.world; 



	//Create the Bodies Here.
  basket1 = new Basket(  1090,500,20,100)
  basket2 = new Basket(910,500,20,100)
  basket3 = new Basket(  1000,550, 200,20 )
  dustbinSprite=createSprite(1000,500,100,100)
  dustbinSprite.addImage(dustbinSpriteI)
  dustbinSprite.scale=0.6;
  paper  = new Paper(500,300,70,40 )
 papersprite=createSprite(500,300,70,40)
  papersprite.addImage(paperspriteI)
  ground = new Ground(600,600,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 paper.display();
// basket1.display();
 //basket3.display();
 //basket2.display();
ground.display();
//keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85} )
   
	 
	   
	 }
   }
   
   



