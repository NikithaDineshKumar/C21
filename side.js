class Ground 
{
    constructor(x, y, w, h)
    {
        let options=
        {
            isStatic:true
        };

        this.ground = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.ground);
    }

    show()
   {
        var pos = this.ground.position;
        push();
        rectMode(CENTER);
        stroke('black');
        fill('yellow')
        rect(pos.x, pos.y, this.w, this.h);
        pop();
   }
}

