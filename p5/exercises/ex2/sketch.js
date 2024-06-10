let dragPoint = null;
let x=50;
let y =50;
let c1= null;
function setup(){
    //can take in hex values
    createCanvas(400, 400);
    background('#b0e6ff');

    fill("red");
    ellipse(x, y, 50);
}

function draw(){
    fill("red");
    c1= ellipse(x, y, 50);
    //c1.mousePressed(moves); cannot wprk like this need to call this function outside
}
function mouseClicked(){
    if (dist(mouseX, mouseY, x, 50) < 25){
        moves();
    }

}
function mouseDragged(){
    moves();
}

function mouseReleased(){
    const X = c1.X;
    const Y = c1.y;
    background('#b0e6ff');
    ellipse(X, Y, 50);
}

function moves(){
    x= mouseX;
    y = mouseY;
    background('#b0e6ff');
}

let sum2 =(a,b) =>a+b
console.log(sum3=(5,6))
function sum(a, b){
    return a+b;
}

document.getElementById("demo").innerHTML ="Arrow function= " + sum2(3,4);
document.getElementById("demo").innerHTML += "<br>Regular function = " + sum(3,4);