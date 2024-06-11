/* TODO
1. Choose two endagered animals and make a program that switches between 
these two scenes.
2. Use 10 shapes or 14 beginShapes for each one.
3. Both scenes should have some kind of animations
4. Have one sustained interactions either w mouse or w key
5. Use a mouse event handler to make a button to switch between both the 
scenes.
6. For each scene label animal's name, habitat, range and interaction instruction.
7. Use p5 only for shapes and texts.
 */

let toSwitch;
function setup(){
  toSwitch = -1;
    createCanvas(1080,1080);
    background(192, 210, 252);
    let button = createButton('click me');
    button.position(540,1100);
}

function mousePressed(){
  toSwitch *= -1;
}


function draw(){
 
  if(toSwitch == -1){
    //fish
//body
noStroke();
fill(255);
beginShape();
vertex(295.5, 347);
vertex(295.5, 358.5);
vertex(349.5, 368);
vertex(507, 292.5);
endShape();

beginShape();
vertex(571.5, 295);
vertex(507, 415);
vertex(349.5, 368);
vertex(507, 292.5);
endShape();

beginShape();
vertex(571.5, 295);
vertex(507, 415);
vertex(599.5, 433);
vertex(640.5, 303);
endShape();

beginShape();
vertex(599.5, 433);
vertex(640.5, 303);
vertex(725, 335);
vertex(715, 433);
endShape();

beginShape();
vertex(725, 335);
vertex(758.5, 354.5);
vertex(764, 415);
vertex(715, 433);
endShape();

beginShape();
vertex(758.5, 354.5);
vertex(764, 415);
vertex(803.5, 398.5);
vertex(802.5, 389);
endShape();

//tail
beginShape();
vertex(300.5, 346);
vertex(300.5, 358.5);
vertex(290.5, 365.5);
vertex(267.5, 402);
vertex(251.5, 378.5);
vertex(251.5, 347.5);
vertex(267.5, 323.5);
vertex(283.5, 342.5);
endShape();

beginShape();
vertex(267.5, 323.5);
vertex(223.5, 285);
vertex(196.0, 277.5);
vertex(197.5, 282);
vertex(223.5, 311);
vertex(251.5, 347.5);
endShape();

beginShape();
vertex(251.5, 378.5);
vertex(233.0, 427);
vertex(220.5, 447.5);
vertex(239.5, 438.5);
vertex(267.5, 402);
endShape();

//eye
//ellipse(741, 359, 22, 20)
noStroke();
fill(255, 135, 167);
circle(741, 359, 20);

//mouth
stroke(0);
noFill();
beginShape();
vertex(758.93, 398.5);
vertex(773, 391.5);
vertex(802.5, 390);
endShape();

//gills
beginShape();
vertex(700.53, 366.82);
vertex(692.53, 374.5);
vertex(692.53, 387.82);
endShape();

beginShape();
vertex(684.5, 331.97);
vertex(671.5, 345.5);
vertex(659, 368);
vertex(659, 408.5);
vertex(667, 417.5);
vertex(678.5, 422.97);
endShape();

//fins
fill(200);
noStroke();
beginShape();
vertex(624.5, 302);
vertex(634.0, 336.5);
vertex(622.5, 353);
vertex(644.5, 362.5);
vertex(664.0, 356.5);
vertex(644.5, 321.5);
endShape();

fill(200);
noStroke();
triangle(603, 432.5, 597.03, 469, 652.5, 412);

fill(200);
noStroke();
beginShape();
vertex(587, 277);
vertex(593.35, 290.39);
vertex(588, 297);
vertex(609.5, 300.5);
vertex(634, 302.5);
vertex(612.18, 285.61);
endShape();

fill(200);
noStroke();
beginShape();
vertex(465.29, 249.14);
vertex(465.29, 256);
vertex(479, 287);
vertex(472, 301);
vertex(514.5, 293.5);
vertex(488.5, 265.5);
endShape();

fill(200);
noStroke();
beginShape();
vertex(446, 396);
vertex(452.5, 412.5);
vertex(438.5, 449.5);
vertex(452.5, 443);
vertex(488.22, 408.53);
endShape();
  }
else{
  
}
}