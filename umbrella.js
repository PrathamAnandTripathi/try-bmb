class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic:false ,
            restitution:0.3,
            friction:0.1,
            density:1.2
        }

      //  umbrella=loadImage()
        umbrella = Bodies.circle(200,100,options);
        World.add(world,umbrella);

    }

    display(){
        update();
        var pos =this.body.position;
        push ();
        translate (pos.x,pos.y);
        fill(255);
        circle(0,0, this.width, this.radius);
        pop();
      }
    
    };