var movingRect,fixedRect;
var rect1,rect2,rect3,rect4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,100,50,50);
  movingRect = createSprite(300,100,30,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  //movingRect.velocityX=-5;
  //fixedRect.velocityX = 5;
  rect1 = createSprite(100,100,50,50);
  rect1.shapeColor="green";
  rect2 = createSprite(300,100,50,50);
  rect2.shapeColor="green";
  rect3 = createSprite(400,100,50,50);
  rect3.shapeColor="green";
  rect4 = createSprite(500,100,50,50);
  rect4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

console.log(movingRect.x-fixedRect.x);
//isTouching

if(isTouching(movingRect,rect2)){
  movingRect.shapeColor = "blue";//true
  rect2.shapeColor = "blue";
}
else{
  movingRect.shapeColor = "green";//false
  rect2.shapeColor = "green";
}

  drawSprites();
}

function isTouching(object1,object2){
  //arguments
//movingRect- object1,fixedRect-object2
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
  }
  else {
  return false;
  }
}