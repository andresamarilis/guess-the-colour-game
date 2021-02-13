let heading = document.getElementById('colourValue');
//buttons is now an array. Has 6 button items. 
let buttons = document.getElementsByClassName('colourButton');

let answerMessage = document.getElementById('answer');



let setButtonColour = (button, red, green, blue) => {
    button.setAttribute('style', 'background-color: rgb('+ red +','+ green +','+ blue +');' );
    
}


function makeColourValue(){
    return Math.round(Math.random()*255);
}

var red = makeColourValue();
var green = makeColourValue();
var blue = makeColourValue();



let startGame = () => {

    answerMessage.innerHTML = "";

var answerButton = Math.round(Math.random() * (buttons.length - 1));
//Loop that makes all 6 boxes change colours. Not just one
for (var i = 0; i < buttons.length; i++) {

    var red = makeColourValue();
    var green = makeColourValue();
    var blue = makeColourValue();
  
    setButtonColour(buttons[i], red, green, blue);
  
    if (i === answerButton) {
        //displays rgb numbers in h2 because of query selector
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }
   

    //adds listener to each button. On click it will run the function

    buttons[i].addEventListener('click', function(){
        if (this === buttons[answerButton]) {
            answerMessage.innerHTML = "Correct!";
        } else {
            answerMessage.innerHTML = "Wrong answer! Guess again!";
        }
    });

  }

}


startGame();

document.getElementById('resetButton').addEventListener('click', startGame);
