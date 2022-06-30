class Ground{
	constructor(x,y,w,h){
		//properties of ground
		var options={
			//code for making ground still
			isStatic:true			
		}
		
		//constructor for the ground body
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display(){

			//sets ground position 
			var groundPos=this.body.position;	

			push();
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}