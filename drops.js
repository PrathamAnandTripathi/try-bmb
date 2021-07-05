class Drops {
    constructor(x, y) {
        var options = {
            isStatic:false ,
            restitution:0.3,
            friction:0.1,
            density:1.2
        }

       if(this.drops.position.y>height){
           Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
       }
        World.add(world,drops);

    }

    display(){
        update();
        var pos =this.body.position;
        push ()
        {
            var maxDrops=100;
            for(var1=0;i<maxDrops;i++){
                drops.push(new createDrops(random(0,400),random(0,400)))
            }
        }
        translate (pos.x,pos.y);
        fill(blur);
        circle(0,0, this.width, this.radius);
        pop();
      }
    
    };

