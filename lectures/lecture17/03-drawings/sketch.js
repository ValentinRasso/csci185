function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
   /* fill("teal")
    circle(500, 300, 350); // x, y, diameter

    fill("white")
    circle(450, 200, 75); // x, y, diameter

    fill("black")
    circle(450, 220, 30); // x, y, diameter

    
    fill("white")
    circle(550, 200, 75); // x, y, diameter

    fill("black")
    circle(550, 180, 30); // x, y, diameter


    // https://p5js.org/reference/#/p5/rect
    fill('black')
    rect(400, 300, 200, 55); // x, y, width, height*/


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawCreature();
    drawGrid(canvasWidth, canvasHeight)
}

function drawCreature (){
    fill("blue")
    circle(500, 300, 350); // x, y, diameter

    fill("white")
    circle(450, 200, 75); // x, y, diameter

    fill("black")
    circle(450, 220, 30); // x, y, diameter

    fill("white")
    circle(550, 200, 75); // x, y, diameter

    fill("black")
    circle(550, 180, 30); // x, y, diameter

    fill('black')
    rect(400, 300, 200, 55); // x, y, width, height

}