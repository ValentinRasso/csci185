function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let counter = 0;
    while (counter < 5){
        circle(100, 200 + counter * 50, 50 + counter * 10);
        counter += 1;
    } 

  /*  let y = 200;
    while (y <= 400){
    circle(100, y, 50)
    y += 50;
}*/

/*let y = 0;
while (y <= 800){
    circle(100, y, 50)
    y += 50;
}*/

    drawGrid(canvasWidth, canvasHeight);
}



