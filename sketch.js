var banana
var monkey, monkey_running, ground, groundImage
var bananaImage, stoneImage, road;
var score
function preload(){
  monkey_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  groundImage = loadImage("jungle.jpg");
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
}
function setup() {
  createCanvas(800, 400);
  score=0;
  ground = createSprite(200,190,400,10);
  ground.addImage(groundImage);
  monkey = createSprite(50,300,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15
  road = createSprite(400,380,800,10);
  
  stoneGroup=new Group();
  bananaGroup=new Group();
  
}

function draw() {
  monkey.collide(road);
  road.visible=false;
  
  if (keyDown("space")){
    monkey.velocityY=-20;
  }
  monkey.velocityY = monkey.velocityY + 0.9;
 if (bananaGroup.isTouching(monkey)){
   monkey.scale = monkey.scale + 0.001;
   score=score+5;
 }
   if (stoneGroup.isTouching(monkey)){
   monkey.scale =0.15
 }
  text("Score: "+ score, 500,50);
  
  switch (score){
    case 10: monkey.scale=0.17;
      break;
      case 20: monkey.scale=0.17;
      break;
      case 30: monkey.scale=0.17;
      break;
      case 40: monkey.scale=0.17;
      break;
      default: break;
  }
  spawnBanana();
  spawnStone();
  drawSprites();
}
function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana;
    banana = createSprite(800,30,40,50);
    banana.visible=true;
    banana.y =Math.round(random(80,120));
    banana.addImage(bananaImage)
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 275;
    bananaGroup.add(banana);
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
  
}
function spawnStone() {
  if(frameCount % 60 === 0) {
    var stone = createSprite(600,350,10,40);
    stone.velocityX = -6;
    stone.scale = 0.15;
    stone.lifetime = 100;
    stoneGroup.add(stone);
    stone.addImage(stoneImage);
  }
}