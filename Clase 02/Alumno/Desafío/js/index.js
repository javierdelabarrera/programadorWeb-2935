
console.log('init app');

var ageUserInput = prompt('Ingrese su edad por favor');

var genderUserInput = prompt('Ingrese su género por favor', 'Femenino, Masculino, X');

var genderMasc = 'Sr.';
var genderFem = 'Sra.';
var genderX = 'Sx.';

var msgMayor = ' usted es mayor de edad puede ingresar';
var msgMenor = ' usted es menor de edad no puede ingresar';

if (genderUserInput === 'Masculino' && ageUserInput < 18) {
    console.log(genderMasc + msgMenor);
} else if (genderUserInput === 'Masculino' && ageUserInput >= 18) {
    console.log(genderMasc + msgMayor);
} else if (genderUserInput === 'Femenino' && ageUserInput < 18) {
    console.log(genderFem + msgMenor);
} else if (genderUserInput === 'Femenino' && ageUserInput >= 18) {
    console.log(genderMasc + msgMayor);
} else if (genderUserInput === 'X' && ageUserInput < 18) {
    console.log(genderX + msgMenor);
} else if (genderUserInput === 'X' && ageUserInput >= 18) {
    console.log(genderX + msgMayor);
} else {
    console.log('Revise las opciones ingresadas por favor')
}