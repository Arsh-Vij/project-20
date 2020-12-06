var car,wall;

var weight,speed;


function setup() {
  createCanvas(800,400); 

speed = random(50,100);
weight = random(500,1500);

car = createSprite(100,200,60,60);
car.shapeColor =("white");
car.velocityX = speed; 

wall = createSprite(600,200,40,200);
wall.shapeColor = ("blue")



}

function draw() {
  background("black");  

if(wall.x - car.x < (wall.width+car.width)/2){
var deformation = 0.5 * speed * weight * speed / 22500;
car.velocityX = 0;
if(deformation <= 80){
    car.shapeColor = ("green");
}
if(deformation > 80){
    car.shapeColor = ("yellow");
}
if(deformation >= 180){
    car.shapeColor = ("red");
}

}

  drawSprites();
}