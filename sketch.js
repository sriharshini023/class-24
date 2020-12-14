const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    pig1=new pig(550,200);
    box1 = new Box(400,300,70,70);
    box2 = new Box(760,100,70,70);
    ground = new ground(500,580,1000,20);
    log1 = new Log(450,150,150,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
  log1.display();
}