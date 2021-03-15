var gameState=0
var start
var bg,bg1,bg2,bg3
var story2,testing,flashcard
var points=0
var answer
function preload(){
bg= loadImage("images/Background1.png")
bg1= loadImage("images/village.jpg")
bg2= loadImage("images/cryingpeople.jpg")
bg3= loadImage("images/test.jpg")
}
function setup(){
 createCanvas(displayWidth-300,displayHeight)
 start= new startup()
 
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


