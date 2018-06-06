console.log('Init app');

var operationInput = prompt('Ingrese la operación a realizar: sum, res, mul o div');
var firstNumInput = prompt('Ingrese el primer número');
var secondNumInput = prompt('Ingrese el segundo número');

var parsedfirstNumInput = parseFloat(firstNumInput, 10);
var parsedsecondNumInput = parseFloat(secondNumInput, 10);

var resultText = 'El resultado de la ' + operationInput + ' es ';
var defaultText = 'Revise las opciones indicadas';


while(operationInput === 'div' && parsedsecondNumInput === 0){
    secondNumInput = prompt('Ingrese el segundo número');
    parsedsecondNumInput = parseFloat(secondNumInput, 10);
}


switch (operationInput) {
    case 'sum':
        var result = parsedfirstNumInput + parsedsecondNumInput;
        console.log(resultText + result);
        break;
    case 'res':
        var result = parsedfirstNumInput - parsedsecondNumInput;
        console.log(resultText + result);
        break;
    case 'mul':
        var result = parsedfirstNumInput * parsedsecondNumInput;
        console.log(resultText + result);
        break;
    case 'div':
        var result = parsedfirstNumInput / parsedsecondNumInput;
        console.log(resultText + result);
        break;
    default:
        console.log(defaultText);
        break;
}

