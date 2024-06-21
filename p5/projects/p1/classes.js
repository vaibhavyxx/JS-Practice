class Bubbles{
    constructor(x,y, radius){
        this.x =x;
        this.y=y;
        this.radius = radius;
    }

    display(){
        let alpha = Math.random() *250;
        fill(255)
        circle(x, y, this.radius);
    }

    moves(){
        let _x = Math.random() * 10 + -5;
        let _y = Math.random() * 10 -5;
        x += _x;
        y +=_y;
    }
}