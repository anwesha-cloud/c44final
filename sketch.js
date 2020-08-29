var max,max_img
var germ,germ_img
var germ2,germ2_img
var mask,mask_img
var sanitizer,sanitizer_img
var booster,booster_img
var bg,bg_img

function preload(){
  max_img = loadImage("images/max.png")
  germ_img = loadImage("images/germ.png")
  germ2_img = loadImage("images/germ2.png")
  mask_img = loadImage("images/mask.png")
  sanitizer_img= loadImage("images/sanitizer.png")
  booster_img = loadImage("images/booster.png")
  bg_img = loadImage("images/track.jpg")
}
function setup() {
  createCanvas(1200,400);
max = createSprite(400, 200, 50, 50);
max.addImage("img", max_img)
max.scale=0.5
germ= createSprite(100, 200, 50, 50);
germ.addImage("g1", germ_img)
germ.scale=0.1
germ2= createSprite(100, 100, 50, 50);
germ2.addImage("g2", germ2_img)
germ2.scale=0.2
mask= createSprite(600, 200, 50, 50);
mask.addImage("msk", mask_img)
mask.scale=0.2
sanitizer= createSprite(100, 00, 50, 50);
sanitizer.addImage("snt", sanitizer_img)
sanitizer.scale=0.2
booster= createSprite(700, 200, 50, 50);
booster.addImage("bst", booster_img)
booster.scale=0.5


}

function draw() {
  background(bg_img);  
  drawSprites();
}