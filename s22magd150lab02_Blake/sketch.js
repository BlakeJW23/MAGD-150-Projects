function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
triangle(75,75,150,150,75,150);
let a = color(0,255,0)
fill(a)
colorMode(RGB, 203)
line(100,75,150,25)
line(125,100,175,50)
line(150,125,200,75)
  push();
colorMode(HSB)
  fill(150,20,40)
quad(20,388,120,388,200,360,20,388,30,76);
  pop();
line(50,375,25,330)
line(100,360,75,305)
line(150,360,175,305)
  push();
let c = color('#DE3636')
fill(c)
arc(380,15,200,200,0,PI+QUARTER_PI,OPEN);
pop();
push();
let d = color('#F5E616')
fill(d)
ellipse(250,250,20,20)
ellipse(300,270,20,20)
ellipse(20,20,20,20)
ellipse(380,210,20,20)
ellipse(350,385,20,20)
pop();


}