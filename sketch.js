var fixedRect, movingRect, bigRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 bigRect = createSprite(600,400,80,80);
 bigRect.shapeColor = "green";


}

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
if (isTouching(movingRect,bigRect)){
  movingRect.shapeColor = "blue";
  bigRect.shapeColor = "blue";
}
else {movingRect.shapeColor = "green";
bigRect.shapeColor = "green";}
  
  drawSprites();
}
