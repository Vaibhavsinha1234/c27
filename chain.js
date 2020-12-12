class chain{
   constructor(A,B){
       var options={
           bodyA:A,
           bodyB:B,
           stiffness:0.4,
           lenght:50
       }
       this.chain=Matter.Constraint.create(options)
       World.add(world,this.chain)
   } 
   display(){
       strokeWeight(3)
       var pointA=this.chain.bodyA.position
       var pointB=this.chain.bodyB.position
       line (pointA.x,pointA.y,pointB.x,pointB.y)
   }
}