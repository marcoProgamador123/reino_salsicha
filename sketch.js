const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var happy_dog,happyIMG;
var fundo,coroaIMG,coroa;
var food_rain = [];

function preload(){
   happyIMG = loadImage("cachorro_feliz.png"); 
   fundo = loadImage("fundo.png");
   coroaIMG = loadImage("coroa.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
createCanvas(600,700); 
  happy_dog = createSprite(300,500,30,30);
  happy_dog.addImage(happyIMG);
  happy_dog.scale = 0.4;
  
  coroa = createSprite(275,395,30,30);
  coroa.addImage(coroaIMG);
  coroa.scale = 0.09
  coroa.visible=false;
}

function draw(){

Engine.update(engine);
background(fundo); 


if (frameCount%60===0) {
    food_rain.push(new Food(random(300, 100),10,10));
  }

  drawSprites();   
}



