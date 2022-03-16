function setup() {
  // put setup code here
  createCanvas(400,200);
  j=0;
  k=0;
}

function draw() {
  // put drawing code here
  var a  = 275 + 20 * Math.sin(PI/10*j)
var b = 340 + 20 * Math.sin(PI/10*j)
var c = 310 + 20 * Math.sin(PI/10*j)
var d  = 90 + 20 * Math.sin(PI/10*j)
var e = 120+ 20 * Math.sin(PI/10*j)
var f = 150 + 20* Math.sin(PI/10*j)
var g =  0 + 90* Math.sin(PI/10*j)
var h = 0 + -90* Math.sin(PI/10*j)
var t = s
var r =1*j
var s =0.5*j


j+=0.5 //ganti nilai ini 



  background(200);
  strokeCap(ROUND)
  strokeWeight(1)
  line(200,900,200,10)
    fill(255, 0, 0)
  ellipse(120,100,130,80)

  line(185,100,70,100)
  line(55,85,40,70)
  line(40,135,55,115) 
  

  
  fill(0, 0, 0)
  ellipse(95,85,15,15)
  ellipse(130,80,25,25)
  ellipse(155,120,15,15)
  ellipse(120,110,25,25)
  ellipse(165,95,20,20)
  ellipse(90,120,15,15)

  fill(0,0,0)
  arc(75,100,55,55,radians(90), radians(268))

  fill(255,255,255)
  ellipse(60,90,10,10)
  ellipse(60,110,10,10)
  
  fill(0,0,0)
  arc(320,100,130,80,radians(360), radians(0))

  fill(255, 0, 0)
  arc(320,100,130,80,radians(g), radians(180))
  arc(320,100,130,80,radians(180), radians(h))
  
  line(385,100,255,100)
  line(235,70,260,85)
  line(235,135,260,115)
  
  fill(0, 0, 0)
  ellipse(300,85,15,15)
  ellipse(330,80,25,25)
  ellipse(365,95,20,20)
  ellipse(290,120,15,15)
  ellipse(320,115,25,25)
  ellipse(350,120,15,15)

 fill(0,0,0)
  arc(275,100,55,55,radians(90), radians(268))

  fill(255,255,255)
  ellipse(260,90,10,10)
  ellipse(260,110,10,10)

strokeCap(ROUND)
strokeWeight(6)
line(290,63,a,50)
line(355,65,b,50)
line(320,58,c,50)

line(290,137,a,150)
line(355,137,b,150)
line(320,140,c,150)

line(90,63,d,50)
line(120,60,e,50)
line(150,63,f,53)

line(90,137,d,150)
line(120,137,e,150)
line(150,136,f,150)

ellipse(r,30,40,20)

fill(0,20,100)
rect(0,0,s,200)

fill(0,0,0)
ellipse(s,40,50,50)

}

