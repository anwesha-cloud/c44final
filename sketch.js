var max,max_img
var germ,germ_img
var germ2,germ2_img
var mask,mask_img
var sanitizer,sanitizer_img
var booster,booster_img
var bg,bg_img

function preload(){
  max_img = loadAnimation("images/max.png","images/max2.png","images/max3.png")
  germ_img = loadImage("images/germ.png")
  germ2_img = loadImage("images/germ2.png")
  mask_img = loadImage("images/mask.png")
  sanitizer_img= loadImage("images/sanitizer.png")
  booster_img = loadImage("images/booster.png")
  bg_img = loadImage("images/track.jpg")
}
function setup() {
  createCanvas(1050,500);
max = createSprite(80, 440, 50, 50);
max.addAnimation("img", max_img)
max.scale=0.5
mask= createSprite(600, 200, 50, 50);
mask.addImage("msk", mask_img)
mask.scale=0.2
sanitizer= createSprite(100, 300, 50, 50);
sanitizer.addImage("snt", sanitizer_img)
sanitizer.scale=0.2
booster= createSprite(700, 200, 50, 50);
booster.addImage("bst", booster_img)
booster.scale=0.5
}

function draw() {
  background(bg_img);  

  if(keyDown("RIGHT_ARROW")){
    max.velocityX=3;
  }
  if(keyWentUp("RIGHT_ARROW")){
    max.velocityX=0;
  }
  max.depth=mask.depth
  max.depth=max.depth+1

  spawnGerms()
  drawSprites();
}

function spawnGerms(){
  if(World.frameCount%100===0){
    var germ= createSprite(1050,Math.round(random(330,470)), 50, 50);
        germ.addImage("g1", germ_img)
        germ.scale=0.1
        germ.velocityX=-1
  }
  if(World.frameCount%300===0){
    var germ2= createSprite(1050,Math.round(random(300,490)), 50, 50);
        germ2.addImage("g2", germ2_img)
        germ2.scale=0.2
        germ2.velocityX=-1
  }
}
