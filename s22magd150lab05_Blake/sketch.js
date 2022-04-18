let cnv;
let d;
//Rectangle
var a = 200;
var b = 100;
var c = 150;
var e = 80;
//ball
var n,m;
var nspeed;
//Circle
//var cx = 340
//var cy = 170
let rectFill, circleFill;






function setup() {
createCanvas(500, 500);

  background(255);
  stroke(0);
  noFill();
n = 30;
m = height/2;
nspeed = 4;
  rectFill = 255;
  circleFill= 255;
}

function draw() {

  background(255);
  rect(a,b,c,e);
  push();
  fill(0);
  w = "Touch to Power On";
  z = "P"
  j = "C"
  text(w,227,138);
  pop();
  
  fill(255);
  if(mouseIsPressed){
    if(mouseX>a && mouseX <a+c && mouseY>b && mouseY <b+e){
      print("Crap, the power went out!");
      fill(0);
    }
  } 
  
  
push();
  fill(0);
  rect(150,182,250,70);
  pop();

  
  push();
  fill(circleFill);
   ellipse(380,172,15,15);
  pop();
  
  push();
  fill(rectFill);
  rect(163,157,20,20);
  pop();
  
  if(mouseX>163 && mouseX <183 && mouseY>157 && mouseY < 177){
    rectFill = 220;
  } else {
    rectFill = 255;
  }
  
   if(dist(mouseX, mouseY,380,172)<7.5){
    circleFill = 220;
  } else {
    circleFill = 255;
  }
  
 
ellipse(n,m,40,40);
n+= nspeed;
  if(n-30 <= 0 || n+30 >width){
    nspeed *= -1
  }
  print("Alright, who's pushing the ball across the floor?")
text(z,377,176);
text(j,168,172);

}
