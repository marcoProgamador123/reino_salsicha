class Food {
    constructor(x,y){
        var options={
            restituition:2,
            friction: 0,
        }
        this.r= 10;
        this.food = Bodies.circle(x,y,this.r,options);
        World.add(world,this.food);
    }
    display(){
        var pos = this.food.position;
        var angle = this.food.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}