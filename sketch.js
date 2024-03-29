var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,190,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,190,30);
    block2.shapeColor = "orange";

    block3= createSprite(500,580,190,30)
    block3.shapeColor="lime"

    block4=createSprite(700,580,190,30)
    block4.shapeColor="cyan"

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=6
    ball.velocityY=6

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1)
        music.play();
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "lime";
        ball.bounceOff(block3)
        music.play();
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "cyan";
        ball.bounceOff(block4)
        music.play();
    }


    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX=0
        ball.velocityY=0

        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
