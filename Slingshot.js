class Slingshot{
    constructor(bodyA,bodyB) {
        var options = {
            'bodyA':bodyA,
            'bodyB':bodyB,
            'stiffness':0.05,
            'length':20
        }
      this.sling=Constraint.create(options)
        World.add(world, this.sling);
      }
      display(){
      
      }
}