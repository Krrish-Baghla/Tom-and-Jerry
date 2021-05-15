var toms,tomImg;
var jerry,jerryImg,jerrym;
var garden,gardenImg;
function preload() {
    //load the images here
    jerryImg = loadAnimation("mouse3.png","mouse2.png");
    jerrym = loadAnimation("mouse1.png","mouse2.png");
    toms = loadAnimation("cat1.png","cat4.png");
    tomA = loadAnimation("cat2.png","cat3.png");
    gardenImg = loadImage("garden.png");
}

function setup()
{
    createCanvas(1000,1000);
    //create tom and jerry sprites here
    /*garden = createSprite(500,500,10,10);
    garden.addImage(gardenImg);*/
    tom = createSprite(800,800,10,10);
    tom.addAnimation("before",toms);
    tom.scale = 0.23;
    jerry = createSprite(150,820,10,10);
    jerry.addAnimation("before",jerryImg);
    jerry.scale = 0.14;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width/2 + jerry.width/2)
    {
        tom.changeAnimation("after",tomA);
        jerry.changeAnimation("after",jerrym)
    }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  {
      jerry.addAnimation("teasing",jerrym);
      jerry.changeAnimation("teasing");
      tom.addAnimation("xyz",tomA);
      tom.changeAnimation("xyz");
      tom.x -= 20;
      
  }

}
