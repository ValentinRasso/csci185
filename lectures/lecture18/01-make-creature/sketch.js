function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


    

    makeCreature(200, 200, 'pink', 'red');
    makeCreature(500, 300, 'teal',  'purple');
    makeCreature(700, 400, 'yellow',  'green')

    




    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}


function makeCreature(x, y, fillColor, eyeColor){
    fill(fillColor)
    //face
    circle(x, y, 300)

    fill(eyeColor)
    //left eye
    ellipse(x - 50, y - 50, 30, 40)
    //right eye
    ellipse(x + 50, y - 50, 30, 40)
}

function mouseClicked(){
    makeCreature(mouseX, mouseY, 'yellow', 'black')
}