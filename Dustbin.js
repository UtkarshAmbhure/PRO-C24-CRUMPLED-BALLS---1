class dustbin
{
  constructor(x,y)
  {
      this.x=x;
      this.y=y;
  this.dustbinWidth=200;
  this.dustbinHeight=100;
  this.wallThickness=20;
  this.angle=0;

  this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness);
  this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinWidth
    )

  this.rightwallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-Dustbin)
Matter.Body.setAngle(this.rightwallBody,-1*this.angle);
  World.add(world,this.bottomBody)
  World.add(world,this.leftWallBody)
  World.add(world,this.rightwallBody)


  }

  display();














}