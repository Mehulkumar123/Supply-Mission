class Box {
    constructor(x,y,width,height) {
        var Options = {
            isStatic:true,
        }
        this.body = rect(x,y,width,height,Options)
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}