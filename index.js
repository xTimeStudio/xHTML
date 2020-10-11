const version = "1.0";
//document.getElementById('WPT').setAttribute('class', 'error')
//alert("Mady by xTime. Version: "+ version);

// Calculator
window.onload = function() {
    var drawingCanvas = document.getElementById('smile');
    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
     // Рисуем окружность 
     context.strokeStyle = "#000";
     context.fillStyle = "#fc0";
     context.beginPath();
     context.arc(100,100,50,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем левый глаз 
     context.fillStyle = "#292929";
     context.beginPath();
     context.arc(84,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем правый глаз 
     context.fillStyle = "#2fff";
     context.beginPath();
     context.arc(116,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем рот
     context.fillStyle = "#ca3939";
     context.beginPath();
     context.moveTo(70,115);
     context.quadraticCurveTo(100,130,130,115);
     context.quadraticCurveTo(100,150,70,115); 
     context.closePath();
     context.stroke();
     context.fill();
    }
   }
var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');
let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');
function onButtonClickPlus() {
    let number1 = input1.value;
    let number2 = input2.value;

    let result = +number1 + +number2
    let resultInput = document.getElementById('result-text')
    resultInput.setAttribute('value', result)
}
function onButtonClickMinus() {
    let number1 = input1.value;
    let number2 = input2.value;

    let result = +number1 - +number2
    let resultInput = document.getElementById('result-text')
    resultInput.setAttribute('value', result)
}
function onButtonClickMultiply() {
    let number1 = input1.value;
    let number2 = input2.value;

    let result = +number1 * +number2
    let resultInput = document.getElementById('result-text')
    resultInput.setAttribute('value', result)
}
function onButtonClickDevide() {
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
