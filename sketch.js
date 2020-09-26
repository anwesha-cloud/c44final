var max,max_img
var germ,germ_img
var germ2,germ2_img
var mask,mask_img
var sanitizer,sanitizer_img
var booster,booster_img
var bg,bg_img
var gameover,gameover_img
var playagain,playagain_img
var ground
var germ1Group
var germ2Group
var maskGroup
var sanitizerGroup
var boosterGroup
var count=0
var healthmeter=200
var PLAY=1
var END=0
var gameState=PLAY

function preload(){
  max_img = loadAnimation("images/max.png","images/max2.png","images/max3.png")
  maxfall_img=loadImage("images/max4.png")
  germ_img = loadImage("images/germ.png")
  germ2_img = loadImage("images/germ2.png")
  mask_img = loadImage("images/mask.png")
  sanitizer_img= loadImage("images/sanitizer.png")
  booster_img = loadImage("images/booster.png")
  bg_img = loadImage("images/track.jpg")
  gameover_img=loadImage("images/over.png")
  playagain_img=loadImage("images/play.png")
}
function setup() {
  createCanvas(1050,500);
max = createSprite(80, 440, 50, 50);
max.addAnimation("img", max_img)
max.addImage("fall",maxfall_img)
max.scale=0.8

gameover=createSprite(525,230,20,20)
gameover.visible=false
gameover.addImage("gov",gameover_img)

playagain=createSprite(525,370,15,15)
playagain.visible=false
playagain.addImage("pag",playagain_img)

ground=createSprite(525,490,1050,20);
ground.shapeColor="black"
germ1Group= new Group()
germ2Group= new Group()
maskGroup= new Group()
sanitizerGroup= new Group()
boosterGroup=new Group()

}

function draw() {
  background(bg_img); 

  max.collide(ground)

  if(gameState===PLAY){
    if(keyDown("RIGHT_ARROW")){
      max.velocityX=2;
    }
    if(keyWentUp("RIGHT_ARROW")){
      max.velocityX=0;
    }
    if(keyDown("UP_ARROW")){
      max.velocityY=-2;
    }
    if(keyWentUp("UP_ARROW")){
      max.velocityY=2;
    }
    if(max.isTouching(maskGroup)){
      count=count+1
    }
    if(max.isTouching(sanitizerGroup)){
      count=count+1
    }
    if(max.isTouching(boosterGroup)){
      count=count+2
    }
  spawnGerm1()
  spawnGerm2()
  spawnMask()
  spawnSanitizer()
  spawnBooster()

  if(max.x===1050){
    max.x=80
  }
  if(max.isTouching(germ1Group)){
    max.x=80
    healthmeter=healthmeter-1
  }
  if(max.isTouching(germ2Group)){
    max.x=80
    healthmeter=healthmeter-1
  }
  }
 
  else if(gameState===END){
    if(healthmeter===0){
      max.changeImage("fall",maxfall_img)
      max.velocityX=0
      germ1Group.destroyEach()
      germ2Group.destroyEach()
      maskGroup.destroyEach()
      sanitizerGroup.destroyEach()
      boosterGroup.destroyEach()
      gameover.visible=true
      playagain.visible=true
     }
  }
  
  if(mousePressedOver(playagain)){
   gameover.visible=false
   playagain.visible=false
   max.changeImage("img",max_img)
   max.velocityX=2
   spawnGerm1()
   spawnGerm2()
   spawnMask()
   spawnSanitizer()
   spawnBooster()

  }

  drawSprites();
  fill("white") 
  textSize(20)
  text("SCORE:"+count,900,30)
  fill("white") 
  textSize(20)
  text("HEALTH METER:"+healthmeter,30,30)
  
}

function spawnGerm1(){
  if(World.frameCount%380===0){
    var germ= createSprite(1000,Math.round(random(80,470)), 50, 50);
        germ.addImage("g1", germ_img)
        germ.scale=0.1
        germ.velocityX=-6
        germ1Group.add(germ)
  }
}
function spawnGerm2(){
  if(World.frameCount%300===0){
    var germ2= createSprite(1000,Math.round(random(100,490)), 50, 50);
        germ2.addImage("g2", germ2_img)
        germ2.scale=0.2
        germ2.velocityX=-4
        germ2Group.add(germ2)
  }
}
function spawnMask(){
  if(World.frameCount%430===0){
   var mask= createSprite(1000,Math.round(random(50,450)), 50, 50);
       mask.addImage("msk", mask_img)
       mask.scale=0.2
       mask.velocityX=-1
      maskGroup.add(mask)
  }
}
function spawnSanitizer(){
  if(World.frameCount%450===0){
   var sanitizer= createSprite(1000,Math.round(random(50,450)), 50, 50);
       sanitizer.addImage("snt", sanitizer_img)
       sanitizer.scale=0.2
       sanitizer.velocityX=-4
      sanitizerGroup.add(sanitizer)
  }
}
function spawnBooster(){
  if(World.frameCount%550===0){
   var booster= createSprite(1000,Math.round(random(150,460)), 50, 50);
       booster.addImage("bst", booster_img)
       booster.scale=0.5
       booster.velocityX=-8
       boosterGroup.add(booster)
  }
}
