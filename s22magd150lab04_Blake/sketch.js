let x = 0
let i = 0 // Change i to see "burnt pizza"
function setup() {
  createCanvas(400, 400);
}
function draw() {
if (i==0) {
  fill(255,255,0);
} else {
  fill(0,0,0); // Burnt pizza
}
  triangle(200,350,100,150,300,150);
 push();
  let c =color(255,0,0);
if (mouseIsPressed) {
    fill(c);
  } else {
    fill(150,75,0);
  }
  ellipse(mouseX,mouseY,10,10);
  pop();
push();
if (keyIsPressed) {
fill(150,75,0);
  } else {
fill(0,255,0);
  } // Change the green topping to a brown topping
ellipse(200,225,25,25); 
ellipse(225,200,25,25);
ellipse(255,200,25,25);
ellipse(200,275,25,25);
ellipse(200,200,25,25);
ellipse(155,200,25,25);
pop();
push();
  ellipse(x, width/3, 25,25); //Pizza cutter missing
  x ++;
function mousePressed() {
  loop();
}
function mouseRelease() {
  noLoop();
}
pop();
print('I KEEP MISSING!!!')
}