const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var stand;
var box1,box2,box3,box4,box5,box6,box7,box8;

function setup() {
  var Canvas = createCanvas(800,400);
  engine = Engine.create();



 stand = new Ground(400,200,100,10);

 box1 = new Box(330,235,40,50);


}

function draw() {
  background(255,255,255);  

  stand.display();
  box1.display();
  
  drawSprites();
}
