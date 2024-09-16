
const screen = document.querySelector('.screen');

function appendToDisplay(input) {
    screen.value += input;
    
}



function clean() {
   screen.value = "";
}



function clear(){
    screen.value = "";
}


function calculate() {
    try {
       screen.value = eval(screen.value);      
    } catch (err) {
        screen.value = "Error";
    }
}








