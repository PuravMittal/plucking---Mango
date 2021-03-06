class Tree{
	//constructor for tree class
	constructor(x,y){
		//dimensions and position
		this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=600;
		this.treeThickness=10;
		
		//loads image
		this.image=loadImage("tree.png");
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true});
		World.add(world, this.bottomBody);

	}
	
	//display for tree class
	display(){
			var posBottom=this.bottomBody.position;
			push();
			translate(posBottom.x, posBottom.y+10);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight);
			pop();
			
	}

}
