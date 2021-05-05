var canvas; 
var block1, block2, block3, block4 , ball
var music;
var edges
function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
      block1 = createSprite(0,580,260,30)
    block1.shapeColor="red"

    block2 = createSprite(260,580,260,30)
    block2.shapeColor="yellow"

    block3 = createSprite(515,580,260,30)
    block3.shapeColor="pink"

    block4 = createSprite(740,580,260,30)
    block4.shapeColor="blue"

    ball = createSprite(random(20,750),100,50,50)
    ball.shapeColor="cyan"
    ball.velocityX=4
    ball.velocityY=9


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
        ball.shapeColor="red"
        music.play()

    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor="yellow"
        music.play()
        //ball.velocityX=0
        //ball.velocityY=0

    }
    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor="pink"
        music.play()

    }
    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor="blue"
        music.play()

    }
    
drawSprites()
    //add condition to check if box touching surface and make it box
}
