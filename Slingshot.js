class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
            'bodyA':bodyA,
            'pointB':pointB,
            'stiffness':0.05,
            'length':10
        }

     
      this.sling=Constraint.create(options);
      this.pointB = pointB;  
      this.sling1 = loadImage('sprites/sling1.png');
      this.sling2 =loadImage('sprites/sling2.png');
      this.sling3 =loadImage('sprites/sling3.png');//
      World.add(world, this.sling);

    }
      display(){

         // image(image_variable,x,y,opt_width,opt_height);
        image(this.sling1,200,20)
        image(this.sling2,170,20)
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;

         strokeWeight(4);

         if(pointA.x<220){
          line(pointA.x-20,pointA.y,pointB.x-10,pointB.y+5);
          line(pointA.x+20,pointA.y,pointB.x+25,pointB.y+5);
          image(this.sling3,pointA.x-28,pointA.y-10,15,30);
         }
         else {
          line(pointA.x+25,pointA.y,pointB.x-10,pointB.y+5);
          line(pointA.x+25,pointA.y,pointB.x+25,pointB.y+5);
          image(this.sling3,pointA.x+20,pointA.y-10,15,30);
         }
         
      }
}