let a = 10.2
let b = 25.5
let c = 32
let maxX=350
let maxY=280
let minX=0
let minY=200
function setup() {
  createCanvas(500, 500);
  frameRate(10)
  

}

function draw() {
  background(190);
  print("The Bubblezzz");
  print("they've taken over");
  ellipse(mouseX,mouseY,15,15);
  ellipse(pmouseX,pmouseY,15,15);
  ellipse(pmouseX-a,pmouseY-a,15,15);
  ellipse(pmouseX-b,pmouseY-b,15,15);
  ellipse(pmouseX-c,pmouseY-c,15,15);
  ellipse(pmouseX+b,pmouseY+b,15,15);
  ellipse(pmouseX*a,pmouseY*a,15,15);
  ellipse(500,220,115,115) // face blowing
  line(380,500,380,280); // bubble stick
  ellipse(380,240,80,80); // circle part
  
}