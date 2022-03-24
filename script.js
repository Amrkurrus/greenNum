/*_____________________script for greenNum____________________________*/
var num1, num2, result;

function plus() {//-------------------------------Отвечяет за сложение
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2
    
    document.getElementById('out').innerHTML = result;
}

function minus() {//------------------------------Отвечяет за вычитание 
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2
    
    document.getElementById('out').innerHTML = result;
}

function multiply() {//---------------------------Отвечяет за умножение
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2
    
    document.getElementById('out').innerHTML = result;
}

function divide() {//---------------------------Отвечяет за умножение
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2
    
    document.getElementById('out').innerHTML = result;
}