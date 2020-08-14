class Umbrella{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.4
        }
        this.body=Bodies.circle(x,y,10,options);
        this.image = loadImage("gt7v7ub.gif");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, x,y,10,20);
        pop();
      }
}
