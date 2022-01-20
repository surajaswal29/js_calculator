//operands
const firstNum=document.querySelector("#first_num");
const secondNum=document.querySelector("#second_num");
const showOutput=document.querySelector("#show-output");

// operations
const add=document.querySelector("#addition");
const minus=document.querySelector("#subtraction");
const multiply=document.querySelector("#multiplication");
const divide=document.querySelector("#division");
const clear=document.querySelector("#clear");

// addition
function addition(x,y){
    const firstNumber=Number(x);
    const secondNumber=Number(y);

    const addOut=`Addition of ${firstNumber} & ${secondNumber} is ${firstNumber + secondNumber}`;
    return showOutput.textContent=addOut;
}

add.onclick=function(){
    addition(firstNum.value,secondNum.value);
}

// subtraction
function subtraction(x,y){
    const firstNumber=Number(x);
    const secondNumber=Number(y);

    const minusOut=`Subtraction of ${firstNumber} & ${secondNumber} is ${firstNumber - secondNumber}`;
    return showOutput.textContent=minusOut;
}

minus.onclick=function(){
    subtraction(firstNum.value,secondNum.value);
}

// multipication
function multipication(x,y){
    const firstNumber=Number(x);
    const secondNumber=Number(y);

    const multiplyOut=`Multipication of ${firstNumber} & ${secondNumber} is ${firstNumber * secondNumber}`;
    return showOutput.textContent=multiplyOut;
}

multiply.onclick=function(){
    multipication(firstNum.value,secondNum.value);
}

// Division
function division(x,y){
    const firstNumber=Number(x);
    const secondNumber=Number(y);

    const divideOut=`Division of ${firstNumber} & ${secondNumber} is ${firstNumber / secondNumber}`;
    return showOutput.textContent=divideOut;
}

divide.onclick=function(){
    division(firstNum.value,secondNum.value);
}

// clear
function clearEvr(){
    firstNum.value="";
    secondNum.value="";
    showOutput.textContent="Your calculation will be displayed here";
}

clear.onclick=function(){
    clearEvr();
}