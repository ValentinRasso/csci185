// make a function:


function changeColor (color, selector){
    //go and select the selector that the user asked for
    //and then set it's background color to the color the user asked for:
    document.querySelector(selector).style.backgroundColor = color;
}

