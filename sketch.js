var dog,happyDog,database,foodS,foodStock
var dogImg,happydogImg

//Create variables here

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png")
  happydogImg=loadImage("images/dogImg1.png")
}

function setup() {

createCanvas(500,500);
dog=createSprite(250,250,30,30)
dog.addImage("dog",dogImg)
dog.addImage("dog",happydogImg)
dog.scale=0.2
database=firebase.database()
foodStock=database.ref('Food');
foodStock.on("value",readstock);



}


function draw() {  
  

  if (keyDown(UP_ARROW)){
  writeStock(foodS)
  dog.changeImage("dog",happydogImg)
  }
  background(46,139,87)
  drawSprites();
  //add styles here
  fill("Red")
  textSize(20)
  text("Food:"+foodS,220,150)
  
}
  function readstock(data){
   foodS=data.val()
  }
  function writeStock(x){
  if(x<=0){
  x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
  Food:x
  })


  }
