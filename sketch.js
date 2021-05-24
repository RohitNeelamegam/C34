const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine,myWorld
var ball;
var ground;
var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function setup() {
  createCanvas(3000,800);
  myEngine = Engine.create()
  myWorld = myEngine.world
  ground = new Ground(800,710,width,30)
  ball = new Ball(400,200,40,40)
 console.log(ball)
  
}

function draw() {
  Engine.update(myEngine)
  background("black");  
  ground.display()
  ball.display()
}