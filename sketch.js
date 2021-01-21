var Ball,Position,Database;

function preload(){
dogstand=loadImage("images/dogimg.png")
dogsit=loadImage("images/dogimg1.png")

}

function setup(){
    createCanvas(500,500);
    Database=firebase.database()
    Ball = createSprite(250,250,10,10);
    Ball.shapeColor = "red";
var Positionref=Database.ref("ball/position");
Positionref.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        dog.addImage(dogstand)
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
        dog.addImage(dogstand)
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
        dog.addImage(dogsit);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
        dog.addImage(dogsit)
    }
    drawSprites();
}

function changePosition(x,y){
Database.ref("ball/position").set({
    x:Ball.x+x,
    y:Ball.y+y
})

}
function readposition(data){
    Position=data.val()
    Ball.x=Position.x
    Ball.y=Position.y
}
function showerror(){
    console.log("error")
}

function writeStock(x){
    if(x<=0){
        x=o;}
  else{
      x=x-1;
        }
        database.ref('/').update({
            Food:x
        })
    }

