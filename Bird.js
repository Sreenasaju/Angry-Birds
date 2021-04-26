class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if(this.body.position.x>220){
      var pos=[this.body.position.x,this.body.position.y];
      this.trajectory.push(pos);
    }  
  
    for(var i=0;i< this.trajectory.length;i++){ // trajectory = [[200,130],[230,59],[234,66]]; trajectory[0][1]
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]); // image(imagename,x,y,optional_width,optional_height);
    }
  }
}
