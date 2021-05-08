function btnPlus(){
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = (num1+num2);
    document.getElementById("result").innerHTML=("Result: "+result);
}
function btnMin(){
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let result = (num1-num2);
    document.getElementById("result").innerHTML=("Result: "+result);

}
function btnMlt(){
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let result = (num1*num2);
    document.getElementById("result").innerHTML=("Result: "+result);

}
function btnDiv(){
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let result = (num1/num2);
    document.getElementById("result").innerHTML=("Result: "+result);
    
}