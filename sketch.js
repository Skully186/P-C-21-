var bullet,wall,speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);


  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  bullet.shapeColor=(255,255,255);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(0);  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>=10){
      wall.shapeColor=("red");
    }
    
    if(damage<18 && damage>10){
      wall.shapeColor=color("yellow");
    }
     
    if(damage<=10){
      wall.shapeColor=color("lime");
    }
  }
  drawSprites();
}