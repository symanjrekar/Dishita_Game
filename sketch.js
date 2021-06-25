var spaceSprite;
var gameState;
var obstacle1,obstacle2,obstacle3,obstacle4,ostacle5;

function preload()
{
    obstacle1 = loadImage("images/Meteor_01.png");
    obstacle2 = loadImage("images/Meteor_02.png");
    obstacle3 = loadImage("images/Meteor_03.png");
    obstacle4 = loadImage("images/Meteor_04.png");
    obstacle5 = loadImage("images/11.png");
}

function setup()
{
    createCanvas(displayWidth,displayHeight);
    spaceSprite = createSprite(displayWidth/2,displayHeight - 100,30,50);
    spaceSprite.shapeColor = "red";
    gameState = 0;
}
function draw()
{
    background(0);
    if (gameState === 0)
    {
        spaceSprite.visible = false;
        showinfo();
    }
    if (gameState === 1)
    {
        spaceSprite.visible = true;
        play();
    }
    drawSprites();
}
function showinfo()
{
    fill ("orange");
    textSize(40);
    text("Welcome to SPACE SHOOT MISSION",displayWidth/2,100);
    textSize(20);
    text("READ this before you start the MISSION",displayWidth/2,200);
    text("SPACE BAR TO PLAY",100,300);
    if(keyDown("SPACE"))
    {
        gameState = 1;
    }

}
function play()
{
        //Navigate the plane
        if(keyIsDown(UP_ARROW))
        {
            spaceSprite.y = spaceSprite.y - 5;
        }
        if(keyIsDown(LEFT_ARROW))
        {
            spaceSprite.x = spaceSprite.x - 5;
        }
        if(keyIsDown(RIGHT_ARROW))
        {
            spaceSprite.x = spaceSprite.x + 5;
        }
        spawnobstacles();

}//ENd of function PLAY

function spawnobstacles()
{
    var ranx = Math.round(random(displayWidth -100,displayWidth - 1000));
    var rany = Math.round(random(0,100));

    if(frameCount % 60 === 0)
    {
        var obstacle = createSprite(ranx,rany,20,20);
        obstacle.velocityY = 2;
        var ranObstacle = Math.round(random(1,5));
        switch (ranObstacle)
        {
            case 1 : obstacle.addImage("M1",obstacle1);
                     obstacle.scale = 0.3;
                     break;
            case 2 : obstacle.addImage("M2",obstacle2);
                     obstacle.scale = 0.3;
                     break;
            case 3 : obstacle.addImage("M3",obstacle3);
                     obstacle.scale = 0.3; 
                     break;
            case 4 : obstacle.addImage("M4",obstacle4);
                     obstacle.scale = 0.3;         
                     break;
            case 5 : obstacle.addImage("11",obstacle5);
                     obstacle.scale = 0.3;         
                     break;
            default: break;
            
        }
    }
    
    
}


