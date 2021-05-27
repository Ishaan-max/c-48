
var bgImg;
var spaceShip,spaceShipImg;
var initial1, initial2, initial3;
var initial1Img, initial2Img, initial3Img;
var score=0;
var asteroidGrp,asteroid2Grp;
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  
  bgImg=loadImage("images/bg.jpg");
  spaceShipImg=loadImage("images/spaceShip.png");
  initial1Img=loadImage("images/initial-1.png");
  initial2Img=loadImage("images/initial-2.png");
  initial3Img=loadAnimation("images/initial-3.png");

  
  
  
}



function setup() {
  createCanvas(800,600);
  
  bg=createSprite(400,300,800,600);
  bg.addImage("bg",bgImg);
  bg.scale=5.4;
  bg.velocityX=-4;
  
  spaceShip=createSprite(100,500,20,20);
  spaceShip.addImage("spaceShip",spaceShipImg);
  spaceShip.scale=0.5;

  asteroidGrp=new Group();
  asteroid2Grp=new Group();

  spaceShip.debug=false;


  }
function draw() {
  background("darkblue");
  
  if(bg.x<0){
    bg.x=bg.width;
  }
  if(gameState===PLAY){
    score=Math.round(frameCount%10000)
 
     
   
  if(keyDown(UP_ARROW)){
    spaceShip.velocityY=-3;
  }
  if(keyDown(DOWN_ARROW)){
    spaceShip.velocityY=3;
  }
  asteroid();
  if(score>0&&score>=900){
    asteroid2(); 
  }
  

  if(asteroidGrp.isTouching(spaceShip)|| asteroid2Grp.isTouching(spaceShip)){

    
    
    gameState=END;
   
   
  }

     if(gameState===END){
      asteroidGrp.setVelocityXEach(0);
      spaceShip.velocityX=0;
      bg.velocityX=0;
      spaceShip.velocityY=0;
      asteroidGrp.setLifetimeEach(-1);
      asteroid2Grp.setVelocityXEach(0);
      asteroid2Grp.setLifetimeEach(-1);
  
    }
  }

 
  

 drawSprites(); 


 if(score>0&&score>=3000){
   gameState= END
   bg.velocityX=0;
   
   fill("red");
   stroke("white");
   strokeWeight(5);
   textSize(30);
   text("YOU WIN",350,300);
 }
 fill("blue");
 textSize(20); 
  text("Score= "+score,600,50);
    
}

function asteroid(){

 if(frameCount%80===0){
  initial1=createSprite(random(400,800),random(100,500),20,20);
  initial1.addImage("initial1",initial1Img);
  initial1.scale=0.4;
  initial1.velocityX=random(-2,-5);
  initial1.lifetime=250;
  asteroidGrp.add(initial1)
  initial1.debug=false;


 
 }

 


}


function asteroid2(){

  
    if(frameCount%80===0){
      initial2=createSprite(random(600,800),random(300,500),20,20);
      initial2.addImage("initial2",initial2Img);
      initial2.scale=0.4;
      initial2.velocityX=random(-2,-5);
      initial2.lifetime=250;
      asteroid2Grp.add(initial2)
      initial2.debug=false;
    
    if(score>0&&score>=1800){
      initial2.changeAnimation("initial3",initial3Img);
    }
     
     
    
  }
}