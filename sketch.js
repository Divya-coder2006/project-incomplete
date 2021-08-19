const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    block8 = new Box(330,235,30,40);

    block9= new Box(360,235,30,40); block10= new Box (390, 235,30,40);
    
    block11= new Box(420,235,30,40);
   
    block12 = new Box (450,235,30,40);
    
    //level three
    
    block13 = new Box(360,195,30,40); block14 = new Box (390,195,30,40);
    
    block15= new  Box(420,195,30,40);
    
    //top
    
    block16 = new Box(398,155,30,40);

    //log6 = new Log(230,180,80, PI/2);
    Slingshot = new SlingShot(bird.body,{x:200, y:100});
}
{}
function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    block8.display(); 
    block9.display();        
    block11.display();
    block12.display();
    block13.display();
    block15.display();
    block16.display();   
}

function mouseDragged (){

    Matter.Body.setPosition(bird.body,{x:mouseX , y:mouseY })
}

function mouseReleased (){

   SlingShot.fly()

}