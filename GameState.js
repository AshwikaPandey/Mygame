class game {
    constructor() {
        this.next = createButton("next")
        //this.next1=createButton("next")
        // this.next2=createButton("next")
        this.next2 = createButton("start")
       
    }
    story() {
        background(bg1)
        this.next.position(displayWidth - 300, displayHeight - 700)
        this.next.mousePressed(() => {
            this.next.hide()
            this.next1 = createButton("next")
            this.next1.position(displayWidth - 300, displayHeight - 700)
            background(bg2)

            story2.test()
        })

    }
    test() {



        this.next1.mousePressed(() => {
            gameState = 2
            this.next1.hide()
            this.greeting = createElement("h2")
            this.greeting.html(" start test to determine college")
            this.greeting.position(100, 50)
            background(bg3)

            this.next2.position(displayWidth - 300, displayHeight - 700)

        })
        this.next2.mousePressed(() => {
            this.next2.hide()
            flashcard = createSprite(displayWidth / 2, displayHeight / 2, 300, 300)
            flashcard.shapeColor = "white"
            var ran = Math.round(random(1, 4))
            switch (ran) {
                case 1: this.question1 = createElement('h4')
                    this.question1.html("what is 2+2")
                    this.question1.position(displayWidth / 2-60, displayHeight / 2 -60)
                    this.input = createInput("answer")
                    this.input.position(400,400)
                    this.b=createButton("SUMBIT")
                    this.b.position(200,200)
                    this.b.mousePressed(()=>{
                        answer.value= this.input.value()  
                    })
                    break;
                case 2: this.question2 = createElement('h4')
                    this.question2.html("what is 4+2")
                    this.question2.position(displayWidth / 2-60 , displayHeight / 2-60)
                    this.input = createInput("answer")
                    this.input.position(400,400)
                    this.b=createButton("SUMBIT")
                    this.b.position(200,200)
                    this.b.mousePressed(()=>{
                        answer.value= this.input.value()  
                    })
                    
                    break;
               case 3: this.question3 = createElement('h4')
                    this.question3.html("what is 4+8")
                    this.question3.position(displayWidth / 2-60 , displayHeight / 2 -60)
                    this.input = createInput("answer")
                    this.input.position(400,400)
                    
                    this.b=createButton("SUMBIT")
                    this.b.position(200,200)
                    this.b.mousePressed(()=>{
                        answer.value= this.input.value()  
                    })
                    
                    break;
              case 4: this.question4 = createElement('h4')
                    this.question4.html("what is 4+9")
                    this.question4.position(displayWidth / 2-60, displayHeight / 2 -60)
                    this.input = createInput("answer")
                    this.input.position(400,400)
                    text("1",30,30)
                    this.b=createButton("SUMBIT")
                    this.b.position(200,200)
                    this.b.mousePressed(()=>{
                        answer.value= this.input.value() 
                        if(answer.value="1"){
                            points=points+2
                        }

                    })
                    
                      break;
                default:break
            }
            
            console.log(points)
            fill("blue")
          text("p"+ points,200,200)
            drawSprites()
        })
    }
    college() {

    }
    office() {

    }
    end() {


    }
}