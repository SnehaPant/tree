class Mango{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
         this.image=loadImage("mango.png")
    }
    display(){
      
        imageMode(CENTER); 
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        
      }
    }