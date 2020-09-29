const version = "1.0";
//document.getElementById('WPT').setAttribute('class', 'error')
alert("Mady by xTime. Version: "+ version);

// Calculator

var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

function onButtonClickPlus() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = input1.value;
    let number2 = input2.value;

    let result = +number1 + +number2
    let resultInput = document.getElementById('result-text')
    resultInput.setAttribute('value', result)
}
function onButtonClickMinus() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = input1.value;
    let number2 = input2.value;

    let result = +number1 - +number2
    let resultInput = document.getElementById('result-text')
    resultInput.setAttribute('value', result)
}
function onButtonClickMultiply() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = input1.value;
    let number2 = input2.value;

    let result = +number1 * +number2
    let resultInput = document.getElementById('result-text')
    resultInput.setAttribute('value', result)
}
function onButtonClickDevide() {
    let input1 = document.getElementById('number1');
    let input2 = document.getElementById('number2');

    let number1 = input1.value;
    let number2 = input2.value;

    let result = +number1 / +number2
    let resultInput = document.getElementById('result-text')
    resultInput.setAttribute('value', result)
}

buttonPlus.addEventListener('click', onButtonClickPlus);
buttonMinus.addEventListener('click', onButtonClickMinus);
buttonMultiply.addEventListener('click', onButtonClickMultiply);
buttonDevide.addEventListener('click', onButtonClickDevide);
