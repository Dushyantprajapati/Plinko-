
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var division1,division2,division3,division4,division5,division6,division7;
var plinkos=[];
var ball=[];
function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

division1=new BaseClass(5,460,10,250);
division2=new BaseClass(100,460,10,250);
division3=new BaseClass(200,460,10,250);
division4=new BaseClass(300,460,10,250);
division5=new BaseClass(400,460,10,250);
division6=new BaseClass(500,460,10,250);
division7=new BaseClass(595,460,10,250);
ground=new BaseClass(300,595,600,20);

for (var j=40; j<=innerWidth; j=j+50){
	plinkos.push(new Plinko(j,60));
}
for (var j =15; j<=innerWidth-10;j=j+50){
	plinkos.push(new Plinko(j,120));
}
for (var j =40; j<=innerWidth;j=j+50){
	plinkos.push(new Plinko(j,180));
}
for (var j =15; j<=innerWidth-10;j=j+50){
	plinkos.push(new Plinko(j,240));
}
for (var j =40; j<=innerWidth;j=j+50){
	plinkos.push(new Plinko(j,300));
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
 if (frameCount%10===0){
	 ball.push(new Ball (random( width/2-200,width/2+200),10,10));
 } 


division1.display(fill("white"));
division2.display(fill("white"));
division3.display(fill("white"));
division4.display(fill("white"));
division5.display(fill("white"));
division6.display(fill("white"));
division7.display(fill("white"));

for (var a=0; a<ball.length;a++){
	ball[a].display();
}

for (var i=0; i<plinkos.length;i++){
	plinkos[i].display();
}

ground.display(fill(160,82,45));
  drawSprites();
 
}