class Stone{
	//constructor for stone class
	constructor(x,y,r){
		//properties
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
		}
		//dimensions and position
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		World.add(world, this.body);

	}
	//display for stone class
	display(){
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			pop();
			
	}

}