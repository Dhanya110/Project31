const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground01;

var plinkos=[];
var particles=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(1000,750);
  engine = Engine.create();
  world = engine.world;
  ground01=new Ground (400,720,1200,10);

  
  for(var k = 10; k <=width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }

   

  for(var j = 0; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,35));
      }
  
  for(var j = 20; j <=width; j =j + 50){
    plinkos.push(new Plinko(j,85));
      }

  for(var j = 0 ; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,135));
      }

  for(var j = 20; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,185));
      }

  for(var j = 0; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,235));
      }
  for(var j = 20; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,285));
      }

  for(var j = 0; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,335));
          }
}


  
function draw() {
 
  background(0);  
  Engine.update(engine);
  ground01.display();

  for (var k=0; k<divisions.length; k++){
  divisions[k].display();}

  for (var j=0; j < plinkos.length; j++ ){
    plinkos[j].display();
    }

    if (frameCount%20===0){
      particles.push(new Particle(random(100,700),10,10) );
    }

    for (var i=0; i<particles.length; i++){
      particles[i].display();}



  drawSprites();
}