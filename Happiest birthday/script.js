let heighestZ = 1 ;



class Paper {

    holdingPaper = false;

    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;

    constructor() {
        
    }

    init(paperElement) {
        paperElement.addEventListener('mousedown', (e) => {
            
            this.holdingPaper = true;

            paperElement.style.zIndex= heighestZ;
            heighestZ+= 1;

            if ( e.button === 0){
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                console.log(this.prevMouseX);
                console.log(this.prevMouseY);
            }
        });
        document.addEventListener('mousemove', (e) => {
            
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;

            if(this.holdingPaper) {

                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                paperElement.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;


            }
        });
        window.addEventListener('mouseup' , (e) => {
            console.log('mouse button is released');
            this.holdingPaper = false;
        });
    }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paperElement => {
    const paperInstance = new Paper();  
    paperInstance.init(paperElement); 
});
