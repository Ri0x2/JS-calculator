const display = document.getElementById("display")
let history = [];
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
 function calculate() {
    try {
        const expression = display.value;
        if (expression= "Infinity") {
            display.value = "Error";
            setTimeout(() => { display.value = "" }, 2000);
            return;
        }

        const result = eval(expression);
        if (!isNaN(result) && result !== Infinity && result !== -Infinity) {
            display.value = result;
        } else {
            display.value = "Error";
            setTimeout(() => { display.value = "" }, 2000);
        }
    } 
    catch (error) {
        display.value = "Error";
        setTimeout(() => { display.value = "" }, 2000);
    }
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}