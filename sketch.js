const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var bg;
var slingShot;
var polygon;

function preload(){
  bg = loadImage("background.jpg");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

   //level one
   block17 = new Block(610,175,30,40);
   block18 = new Block(640,175,30,40);
   block19 = new Block(670,175,30,40);
   block20 = new Block(700,175,30,40);
   block21 = new Block(730,175,30,40);
   block22 = new Block(760,175,30,40);
   block23 = new Block(790,175,30,40);
   //level two
   block24 = new Block(640,135,30,40);
   block25 = new Block(670,135,30,40);
   block26 = new Block(700,135,30,40);
   block27 = new Block(730,135,30,40);
   block28 = new Block(760,135,30,40);
   //level three
   block29 = new Block(670,95,30,40);
   block30 = new Block(700,95,30,40);
   block31 = new Block(730,95,30,40);
   //top
   block32 = new Block(700,55,30,40);

   polygon = new Polygon(50,200,20);

  slingShot = new Slingshot(polygon.body, {x:100, y:200});
}
function draw() {
  background(bg); 

  textSize(25);
  fill("#B981FF")
  textFont("Monotype Corsiva");
  strokeWeight(3);
  stroke("#3D0089")
  text("⇢ ˗ˏˋ Press Space To Get a Second Chance to Play! ˏˋ°•*⁀➷",30 ,55);
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();

  strokeWeight(2);
  stroke("#048A87");
  fill("#78F7F4");
  stand1.display();

  strokeWeight(2);
  stroke("#3205AA");
  fill("#7E4DFB");
  stand2.display();
  
  strokeWeight(2);
  stroke("#8F1F16");
  fill("#CD2D20");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  stroke("#BC6326");
  fill("#EB7C30");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  stroke("#BB9D18");
  fill("#EAC51F");
  block13.display();
  block14.display();
  block15.display();
  stroke("#dbb715");
  fill("#ffd085");
  block16.display();

  strokeWeight(2);
  stroke("#9409A4");
  fill("#D40DEB");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  stroke("#7632BE");
  fill("#943FEE");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  stroke("#5E5FC0");
  fill("#7677F0");
  block29.display();
  block30.display();
  block31.display();
  stroke("#5284A8");
  fill("#76BDF0");
  block32.display();

  slingShot.display();
  polygon.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:50, y:200})
    slingShot.attach(polygon.body);
  }
  }
