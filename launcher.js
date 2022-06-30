class launcher{
	//constructor for launcher 
	constructor(body,anchor){
		
		//properties
		var options={
			bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body;
		this.pointB=anchor;
		this.launcher=Constraint.create(options);
		World.add(world,this.launcher);
	}

	//attach stone to hand
	attach(body){
		this.launcher.bodyA=body;
	}

	//releases stone
	fly(){
		this.launcher.bodyA=null;
	}

	//displays stone 
	display(){
		if(this.launcher.bodyA){
			var pointA=this.bodyA.position;
			var pointB=this.pointB;

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}