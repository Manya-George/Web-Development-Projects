let  display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function backSpace(){
    display.value -= display.value;
}

function calculate(){
    display.value = eval(display.value);
}