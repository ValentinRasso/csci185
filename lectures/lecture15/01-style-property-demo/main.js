
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color = 'white';
    document.querySelector('#section1').style.fontSize = '30px';

}

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section2').style.color = 'yellow';
    document.querySelector('#section2').style.fontSize = '25px';


}

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';

}

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';

}
function multicolor() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').innerHTML = 'Hello'
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section2').innerHTML = 'There'
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section3').innerHTML = 'Amigazo'
    document.querySelector('#section4').style.backgroundColor = 'orange';
    document.querySelector('#section4').innerHTML = '!'

}

