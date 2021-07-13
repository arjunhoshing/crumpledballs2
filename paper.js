class Paper {
     constructor () {
         var options = {
             restitution: 0.3,
             friction: 0.5,
             density: 1.2
         }

         this.body = Bodies.circle(50,300,70,options)
         World.add(world,this.body)
         this.image = loadImage("sprites/paper.png")
     }

     display() {
        fill(225);
        imageMode(CENTER);
        image(this.image,50,300,70);
     }

        

}