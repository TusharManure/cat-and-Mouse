
var jerry,jerryImg1,jerryImg2;
var tom,tomImg1,tomImg2;
var background1;
var backgroundImg;
var canvas;

function preload() {
  backgroundimg=loadImage("garden.png");
  tomImg1=loadImage("tomOne.png");
  tomImg2=loadAnimation("tomOne.png","tomThree.png");
  jerryImg1=loadAnimation("jerryOne.png","jerryThree.png");
  jerryImg2=loadImage("jerryOne.png");
  


  
}

function setup(){
   canvas=createCanvas(1000,800);

    tom = createSprite(870,600);
    tom.addAnimation("tom11",tomImg1);
    tom.scale=0.3;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry",jerryImg1);
    jerry.scale=1;



}

function draw() {
 
    

    background(background1);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
