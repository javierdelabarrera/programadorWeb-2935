
console.log('init app');

var diaInputUsuario = prompt('Ingrese cualquier dia de la semana');

var msgDiaHabil = 'Ud ha ingresado un día hábil';
var msgDiaFinde = 'Ud ha ingresado un día del fin de semana';
var msgDiaNoValido = 'Ud ha ingresado un día no válido, revise por favor';

switch (diaInputUsuario) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
        console.log(msgDiaHabil);
        break;
    case 'sabado':
    case 'domingo':
    case 'sábado':
    case 'Domingo':
    case 'Sábado':
    case 'Sabado':
        console.log(msgDiaFinde);
        break;
    default:
        console.log(msgDiaNoValido);
        break;
}