let operator = "";
let previousValue = "";
let currentValue = "";



document.addEventListener("DOMContentLoaded", function(){
    //Store all components on HTML doc.
    let clear = document.querySelector("#cButt");
    let equal = document.querySelector("#finalButt");
    let decimal = document.querySelector("#decimalButt");
    
    let numbers = document.querySelectorAll("#numButt");
    let operators = document.querySelectorAll("#operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;

    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = "";
        currentValue = "";
        operator = "";
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

})

function handleNumber(num) {
    if(currentValue.length <= 7) {
     currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}