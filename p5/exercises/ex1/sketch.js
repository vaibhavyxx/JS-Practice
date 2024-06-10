let x, y;
x=y= 50;    //to assign variables of same value

//calls once only
function setup(){
    createCanvas(400,400);
    background(192, 210, 252);
}

//calls every frame
function draw(){
    //this will make the ball rolling
    //background(192, 210, 252);
    noStroke();
    fill(255, 135, 167);
    circle(x, y, 50);     //takes in x,y and radius
    x+=5;
    y+=5;
    
}