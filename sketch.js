var wall, thickness;
var bullet, speed, weight; 
var bulletRightEdge,wallLeftEdge 


function setup() {
  createCanvas(1600,400);
  speed=random(220,320);
  weight=random(30,50); 
  thickness=random(22,83);
  bullet=createSprite(50,200,20,10);
  
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
  drawSprites();
  bullet.shapeColor=color(255,255,255);
  wall.shapeColor=color(80,80,80);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  }
    return false; 
  }