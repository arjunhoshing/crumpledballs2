class Dustbin {
    constructor (x,y,w,h) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,options)
        this.width = w
        this.height = h
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position
        rectMode(CENTER)
        fill(125)
        rect(pos.x,pos.y,this.width,this.height)
    }

    displayImage() {
        this.image = loadImage("sprites/dustbingreen.png")

    }
        

}