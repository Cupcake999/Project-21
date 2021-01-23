var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var ed1,ed2,ed3,ed4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
ed1=createSprite(1,1,10000,50);
ed1.visible=false;

ed2=createSprite(800,600,50,10000);
ed2.visible=false;

ed3=createSprite(1,600,50,100000);
ed3.visible=false;

ed4=createSprite(800,600,10000,50);
ed4.visible=false;
    //create 4 different surfaces
block1 = createSprite(100,590,170,30);
block1.shapeColor = "red";

block2 = createSprite(300,590,170,30);
block2.shapeColor = "green";

block3 = createSprite(500,590,170,30);
block3.shapeColor = "yellow";

block4 = createSprite(700,590,170,30);
block4.shapeColor = "blue";
    //create box sprite and give velocity

ball = createSprite(200,500,30,30)
ball.shapeColor = "black"
ball.velocityX=5;
ball.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if (ball.isTouching(block1)){
        ball.shapeColor ="red"
        bounceOff(block1,ball)
        ball.velocityY =0
        music.stop();
     
    }
    if (ball.isTouching(block3)){
        ball.shapeColor ="yellow"
        bounceOff(block3,ball)
    }
    if (ball.isTouching(block2)){
        ball.shapeColor ="green"
        bounceOff(block2,ball)
    }
    if(ball.isTouching(block4)){
        ball.shapeColor ="blue"
        bounceOff(block4,ball)
    }
  
   bounceOff(ed1,ball);
   bounceOff(ed2,ball);
   bounceOff(ed3,ball);
   bounceOff(ed4,ball)
  drawSprites();

    //add condition to check if box touching surface and make it box

}
