// Make it so you can click a button and that button's number shows up in the screen

// Get the button
// Add a click event to the button to console log out the value of that button
// Get the screen
// Change the screen's inner html to be the value of the button that was just clicked

//firstly, I will give variable names to all the elements belonging to a class
document.addEventListener("DOMContentLoaded", function() {//this function wraps around everything!
//the above line of code is setting the format for what we will write below:
//variable name.ael("type of event",function or what you hope to do with the event)
// document.addEventListener() method attaches an event handler to the document
//all of the variables below return an array, which we will then index and label accordingly
  var buttonNum = document.getElementsByClassName('buttonNum');
  var operator = document.getElementsByClassName('operator');
  var buttonClear = document.getElementsByClassName('buttonClear');
  var equals = document.getElementsByClassName('equals');
  var thescreen = document.getElementById('screen');
//num1 and num2 are declared because we will have 2* 1-digit numbers; therefore two stored numbers
  var num1 = 0;
  var num2 = 0;
//num1 and num2 used as empty container for the two numbers we will use
  var add = false;
  var sub = false;
  var multi = false;
  var div = false;
  var answer = 0;


  buttonNum[0].addEventListener('click' , function(event){
    thescreen.innerHTML = "7";
    //if one variable container is taken, use the other one
    if (num1 == 0) {
      num1 = 7;
    } else {
      num2 = 7;
    }

  });
//this [] is the order of things being stored in class names in the html file
  buttonNum[1].addEventListener('click' , function(event){
    thescreen.innerHTML = "8";
    if (num1 == 0) {
      num1 = 8;
    } else {
      num2 = 8;
    }

  });
//find out and study the benefits of stop propagation. it doesnt seem to be needed.
  buttonNum[2].addEventListener('click' , function(event){
    thescreen.innerHTML = "9";
    if (num1 == 0) {
      num1 = 9;
    } else {
      num2 = 9;
    }

  });
  buttonNum[3].addEventListener('click' , function(event){
    thescreen.innerHTML = "4";
    if (num1 == 0) {
      num1 = 4;
    } else {
      num2 = 4;
    }

  });
  buttonNum[4].addEventListener('click' , function(event){
    thescreen.innerHTML = "5";
    if (num1 == 0) {
      num1 = 5;
    } else {
      num2 = 5;
    }

  });
  buttonNum[5].addEventListener('click' , function(event){
    thescreen.innerHTML = "6";
    if (num1 == 0) {
      num1 = 6;
    } else {
      num2 = 6;
    }

  });
  buttonNum[6].addEventListener('click' , function(event){
    thescreen.innerHTML = "1";
    if (num1 == 0) {
      num1 = 1;
    } else {
      num2 = 1;
    }

  });
  buttonNum[7].addEventListener('click' , function(event){
    thescreen.innerHTML = "2";
    if (num1 == 0) {
      num1 = 2;
    } else {
      num2 = 2;
    }

  });
  buttonNum[8].addEventListener('click' , function(event){
    thescreen.innerHTML = "3";
    if (num1 == 0) {
      num1 = 3;
    } else {
      num2 = 3;
    }

  });

//now moving into instances of the operator variable
  operator[0].addEventListener('click' , function(event){
    thescreen.innerHTML = "*";
    multi = true;
  });

  operator[1].addEventListener('click' , function(event){
    thescreen.innerHTML = "/";
    div = true;
  });

  operator[2].addEventListener('click' , function(event){
    thescreen.innerHTML = "-";
    sub = true;

  });

  operator[3].addEventListener('click' , function(event){
    thescreen.innerHTML = "+";
    add = true;

  });
// a neat trick was performed to use the clear button
  buttonClear[0].addEventListener('click' , function(event){
    thescreen.innerHTML = "Sparta Global     ";//this is the empty screen display, giving the effect of having cleared it

  });
//the uses of the equals button have to be defined conditionally
  equals[0].addEventListener('click' , function(event){
    if (add == true) {
      answer = num1 + num2;
    } else if (sub == true) {
      answer = num1 - num2;
    } else if (div == true) {
      answer = num1 / num2;
    } else if (multi == true) {
      answer = num1 * num2;
    }
    thescreen.innerHTML = (answer);
//simple arithematic functions stored under the equals button
    num1 = 0;
    num2 = 0;
    add = false;
    sub = false;
    div = false;
    multi = false;
    //resetting for new inputs
  });
});
