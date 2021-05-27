var bullet, wall;
var speed, weight;
var thickness;
function setup() {
  createCanvas(1600, 400);
  bullet= createSprite(50, 200, 50, 50)
  speed = random(223,321)
  weight = random(30,52)
  thickness =random(22,83)
  wall = createSprite(1500, 200, thickness, height / 2)
  wall.shapeColor=(80,80,80)
  bullet.velocityX = speed;
}


function draw() {
  background(0, 0, 0);
  if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) /(thickness*thickness*thickness);

    if (damage > 10) {

      bullet.shapeColor = color(255,0,0);

    }
 
  if(damage<10)
  {
    bullet.shapeColor=color(0,255,0);
  }
  }



  drawSprites();

}