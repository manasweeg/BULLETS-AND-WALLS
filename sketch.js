
var bullet,wall;
var thickness,speed,wieght;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
 
  bullet= createSprite(500,200,50,50);
  wall = createSprite(1200,200,60,100);

  bullet.velocityX=speed;

  thickness=random(22,83);



}

function draw() {
  background("black");
  
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0); 
    }

  }

  
  drawSprites();

  
}


function hascollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
