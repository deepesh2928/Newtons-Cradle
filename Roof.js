class Roof {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(300,50,500,20,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      fill(128,128,128);
      rect(300,50,500,20);
      pop();
    }
  };