var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, edges;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	


	edges = createEdgeSprites();

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

//   packageBody.position.x = helicopterSprite.x;
//   packageBody.position.y = helicopterSprite.y;
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
//   helicopterSprite.collide(edges);
//   if(keyDown(RIGHT_ARROW)){
// 	helicopterSprite.velocityX = 4;
//   }
//   else if(keyDown(LEFT_ARROW)){
// 	helicopterSprite.velocityX = -4;
//   }
//   else{
// 	helicopterSprite.velocityX = 0;
//   }
  //console.log(packageBody.parent.isStatic);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic( packageBody,false);
	

    
  }
}



