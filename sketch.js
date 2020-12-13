const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3, bob4,bob5, roof;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(600, 900);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	bobDiameter=100;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	roof=new Roof();

	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new rope(bob1.body,roof.body,-bobDiameter*2, 11);

	rope2=new rope(bob2.body,roof.body,-bobDiameter*1, 11);
	rope3=new rope(bob3.body,roof.body,0, 11);
	rope4=new rope(bob4.body,roof.body,bobDiameter*1, 11);
	rope5=new rope(bob5.body,roof.body,bobDiameter*2, 11);

	Engine.run(engine);
}


function draw() {
 rectMode(CENTER);
 background(230);

 console.log(roof.x,roof.y);

 roof.display();

 console.log(roof.x,roof.y);

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();	
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
 	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:-55});
 }
 if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:60,y:55});
	}
}


function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position;
	roofBodyPosition=constraint.bodyB.position;

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y;

	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}