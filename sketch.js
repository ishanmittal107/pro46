var canvas;
var enemies, weapon;
var ninja,ninjastar;


function preload()
{
    ninjahattori=loadImage("Daco_262563.png")
monsters=loadImage("Daco_1677878.png");
ninjastar1=loadImage("ninja star.png")
fireball=loadImage("weapon3.png");
bg= loadImage("background.jpg")
};

function setup()
{
canvas = createCanvas(1200,550);
edges=createEdgeSprites();

ninja= createSprite(100,400);
ninja.scale=0.1;
ninja.addImage(ninjahattori);



enemie1=createSprite(1050,400);
enemie1.addImage(monsters)
enemie1.scale=0.2;
enemie1.velocityY=-2;

  
enemie2=createSprite(700,400);
enemie2.addImage(monsters)
enemie2.scale=0.2;
enemie2.visible=false;
  
enemie3=createSprite(1000,250);
enemie3.addImage(monsters)
enemie3.scale=0.2;
enemie3.visible=false;




};

function draw (){
background(bg);


/*if(weapon.velocityX==0){
    weapon.x=enemie1.x-20;
weapon.y=enemie1.y+30

}*/
if(keyDown("Space")){

    
    ninjastar=createSprite(150,400,50,50);
    ninjastar.addImage(ninjastar1);
    ninjastar.velocityX=8
    ninjastar.scale=0.1
}
if(keyDown(UP_ARROW) && ninja.y>=180){
    ninja.y=ninja.y-5;
    ninjastar.y=ninjastar.y-5
}
if(keyDown(DOWN_ARROW)&& ninja.y<=370){
    ninja.y=ninja.y+5;
    ninjastar.y=ninjastar.y+5
}
spawnWeapon();

enemie1.bounceOff(edges);
drawSprites();
};

function spawnWeapon(){
    if(frameCount%100==0){

        weapon=createSprite(1030,430,50,50);
        weapon.velocityX=-5;
        weapon.addImage(fireball);
        weapon.scale=0.2
        weapon.x=enemie1.x-20;
        weapon.y=enemie1.y+30
            
        }
}
