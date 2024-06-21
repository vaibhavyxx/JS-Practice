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

let button;
let turtleVisible = false;
let buttonPressed = false;
let bubblesList = [];
function setup() {
  createCanvas(1080, 1080);
  background(192, 210, 252);
  button = createButton("click me");
  button.position(540, 1100);
  button.mousePressed(switchScene);

  fill(255);
  textSize(48);
  textStyle(BOLD);
  textFont("Verdana");
  text("Learn about Endangered Species", 50, 100);

  for(let i=0; i <5; i++){
    let x= Math.random() * 800 +400;
    bubblesList.push(new Bubbles(x, 100, 50));
  }
}

//switches properly
function draw() {
  if(!turtleVisible){
    drawTurtle();
  }else{
    drawTuna();
    for(const bubby in bubblesList){
      //does not work
    }
  }
}

function switchScene() {
  turtleVisible = !turtleVisible;
}

function drawTuna(){
  background(54, 164, 255);

  push();
  fill(255);
  textSize(48);
  textStyle(BOLD);
  textFont("Verdana");
  text("Bluefin Tuna", 50, 100);

  //show tuna
  let gradient = drawingContext.createLinearGradient(100, 320, 100, 410);
  gradient.addColorStop(0, color(36, 36, 46));
  gradient.addColorStop(1, color(255));
  drawingContext.fillStyle = gradient;
  noStroke();
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
  fill(74, 74, 74);
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
  fill(74, 74, 74);
  noStroke();
  beginShape();
  vertex(624.5, 302);
  vertex(634.0, 336.5);
  vertex(622.5, 353);
  vertex(644.5, 362.5);
  vertex(664.0, 356.5);
  vertex(644.5, 321.5);
  endShape();

  noStroke();
  triangle(603, 432.5, 597.03, 469, 652.5, 412);

  noStroke();
  beginShape();
  vertex(587, 277);
  vertex(593.35, 290.39);
  vertex(588, 297);
  vertex(609.5, 300.5);
  vertex(634, 302.5);
  vertex(612.18, 285.61);
  endShape();

  noStroke();
  beginShape();
  vertex(465.29, 249.14);
  vertex(465.29, 256);
  vertex(479, 287);
  vertex(472, 301);
  vertex(514.5, 293.5);
  vertex(488.5, 265.5);
  endShape();

  noStroke();
  beginShape();
  vertex(446, 396);
  vertex(452.5, 412.5);
  vertex(438.5, 449.5);
  vertex(452.5, 443);
  vertex(488.22, 408.53);
  endShape();
  pop();
}

function drawTurtle(){
  background(12, 112, 166);

  fill(255);
  textSize(48);
  textStyle(BOLD);
  textFont("Verdana");
  text("Green Turtle", 50, 100);
  //green turtle
  fill(204, 197, 163);
  //body
  noStroke();
  bezier(340, 395, 359.98, 348.37, 407.5, 304.5, 459, 280.5);
  bezier(459, 280.5, 494.5, 262, 497.89, 277.5, 509.5, 277.5);
  bezier(509.5, 277.5, 555.5, 300, 608.5, 322.67, 608.5, 379);
  bezier(608.5, 379, 608.5, 435.33, 558, 457.5, 491.5, 465.5);
  bezier(491.5, 465.5, 425.78, 465.5, 321, 482.33, 321, 426);
  bezier(321, 426, 321.64, 415.16, 333.59, 407.12, 340, 395);

  beginShape();
  vertex(340, 395);
  vertex(459, 280.5);
  vertex(509.5, 277.5);
  vertex(608.5, 379);
  vertex(491.5, 465.5);
  vertex(321, 426);
  endShape();

  //tummy
  fill(204, 197, 163);
  bezier(398.5, 465, 384.21, 456.75, 417, 428.5, 417, 416.5);
  bezier(417, 416.5, 417, 390.82, 456.85, 370, 506, 370);
  bezier(506, 370, 555.15, 370, 595, 390.82, 595, 416.5);
  bezier(595, 416.5, 595, 442.18, 534, 460.49, 506, 463);
  bezier(506, 463, 472.5, 466, 414.79, 474.4, 398.5, 465);
  beginShape();
  vertex(398.5, 465);
  vertex(417, 416.5);
  vertex(506, 370);
  vertex(595, 416.5);
  vertex(506, 463);
  endShape();

  //left arm
  fill(27, 82, 31);
  bezier(218, 594.5, 271.5, 534, 385.38, 352.5, 421, 352.5);
  bezier(421, 352.5, 456.62, 352.5, 390, 494.5, 360.5, 540.5);
  bezier(360.5, 540.5, 319.8, 603.97, 274.12, 628.5, 238.5, 628.5);
  bezier(238.5, 628.5, 202.88, 628.5, 199.5, 621, 218, 594.5);
  beginShape();
  vertex(218, 594.5);
  vertex(421, 352.5);
  vertex(360.5, 540.5);
  vertex(238.5, 628.5);
  endShape();

  //right arm
  bezier(582.88, 381.5, 582.88, 367.42, 584.5, 353.5, 602.5, 353.5);
  bezier(602.5, 353.5, 617.14, 353.5, 642.5, 366.5, 658.5, 388);
  bezier(658.5, 388, 675.54, 410.89, 706.17, 455.5, 725.5, 473.5);
  bezier(725.5, 473.5, 744.72, 491.39, 751.5, 507, 767.5, 523.5);
  bezier(767.5, 523.5, 796, 537.09, 774.85, 543.57, 761, 537.09);
  bezier(761, 537.09, 754.96, 534.26, 746.4, 528.77, 735, 520);
  bezier(735, 520, 723, 510.77, 661, 439.5, 649, 423);
  bezier(649, 423, 637, 409.5, 619.03, 394, 612, 394);
  bezier(612, 394, 597.36, 394, 582.88, 395.58, 582.88, 381.5);
  beginShape();
  vertex(582.88, 381.5);
  vertex(602.5, 353.5);
  vertex(658.5, 388);
  vertex(725.5, 473.5);
  vertex(767.5, 523.5);
  vertex(761, 537.09);
  vertex(735, 520);
  vertex(649, 423);
  vertex(612, 394);
  endShape();

  fill(67, 122, 71)
  //head
  bezier(508, 253, 542, 254.5, 554, 272.13, 554, 294.5);
  bezier(554, 294.5, 555, 328.5, 526.35, 327, 501.5, 327);
  bezier(501.5, 327, 476.65, 327, 469, 308.37, 469, 286);
  bezier(469, 286, 469, 263.63, 478.5, 254, 508, 253);
  beginShape();
  vertex(508, 253);
  vertex(554, 294.5);
  vertex(501.5, 327);
  vertex(469, 286);
  endShape();
}