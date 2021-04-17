class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    // this.body.position.x = mouseX;
    // this.body.position.y = mouseY;
    Body.setDensity(this.body,5);
    super.display();
    
  }
}
