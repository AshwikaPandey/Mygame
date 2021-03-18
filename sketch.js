var gameState=0
var start
var bg,bg1,bg2,bg3,sub
var story2,testing,flashcard
var points=0
var answer1
var submit
var corona
var covid
function preload(){
bg= loadImage("images/Background1.png")
bg1= loadImage("images/village.jpg")
bg2= loadImage("images/cryingpeople.jpg")
bg3= loadImage("images/test.jpg")
sub=loadImage("image/sub.jpg")
corona=loadAnimation(" images/corona.png","images/corona2.png","images/corona3.png")

}
function setup(){
 createCanvas(displayWidth-300,displayHeight)
 start= new startup()
 submit= createSprite(displayWidth / 2-120,displayHeight / 2+200,20,20)
 covid=createSprite(displayHeight+20,displayHeight+200,200,200)
}
console.log(gameState)
function draw(){
   
if(gameState===0){
    background(bg)
   start.display()

}
if(gameState===1){
//story
//story2.story()

}
if(gameState===2){
//test


}
if(gameState===3){
//college

}
if(gameState===4){
//doctor office
}
 if(gameState===5){
//end
}

 

}


