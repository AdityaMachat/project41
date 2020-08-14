const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops=[];
var engine,world,maxdrops,umbrella;
function setup(){
  createCanvas(200,400);
  engine=Engine.create();
  world=engine.world;
    maxdrops=100;
  //  umbrella =new Umbrella(100,380);
   for(var i=0;i<maxdrops;){
   drops.push(new Drop(random(0,400),random(0,400)));
   }
  
}

function draw(){
   background(0); 
   Engine.update(engine);
  //umbrella.display();
  for(var i=0;i< drops.length; i++) {
     drops[i].display();
   }
}   

