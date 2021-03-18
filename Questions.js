  class Questions{
constructor(){

}
que(){
    flashcard = createSprite(displayWidth / 2, displayHeight / 2, 500, 500)
            flashcard.shapeColor = "white"
   text("how many valves does the heart have",displayWidth / 2-60, displayHeight / 2+240)
   this.input = createInput("answer")
   this.input.position(displayWidth / 2-60,displayHeight / 2+200)
   submit.addImage(sub) 
   if(submit.mouseClicked()){
    answer1= this.input.value()
    if(answer1==='4'){
                            
        points= points+1
        text(points,200,50)
        console.log("hello")
    }
   }
   drawSprites()
   
}
que2(){
    flashcard = createSprite(displayWidth / 2, displayHeight / 2, 500, 500)
    flashcard.shapeColor = "white"
    text("what is the powerhouse of the cell")
    this.option1 = createButton("Nucleus")
    this.option2 = createButton("Michondria")
    this.option1.position(displayWidth / 2-60,displayHeight / 2+200)
      this.option2.position(displayWidth / 2-60,displayHeight / 2+300)
      
      this.option2.mousePressed(() => {
      points= points+1
      })
      this.option1.mousePressed(()=>{
          points= points-1
      })
      drawSprites()
}
que3(){
    flashcard = createSprite(displayWidth / 2, displayHeight / 2, 500, 500)
    flashcard.shapeColor = "white"
    text("What are the safety precuations to take during Covid-19")
   covid.animation(corona)
   if(covid.mouseClicked()){
       points= points+1
   }
   drawSprites()
}

  }