class Rope{
	constructor(body1,body2,x)
	{
		var options={bodyA:body1,
			bodyB:body2,
			pointB:x
		}
	//create rope constraint here
this.rope=Matter.Constraint.create(options);
this.x=x;
World.add(world,this.rope);
	}


    //create display() here 

display(){
var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;

strokeWeight(2);
line(pointA.x,pointA.y,pointB.x+this.x,pointB.y+this.y);





}


    }
