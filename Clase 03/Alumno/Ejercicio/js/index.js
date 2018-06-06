console.log('Init app');

var msgLaborDay = ' es día de semana';
var msgWeekendDay = ' es fin de semana';
var msgNotValidDay = ' es un valor inválido';

var day;

var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
];

for (var i = 0; i < daysOfTheWeek.length; i++) {
    day = daysOfTheWeek[i];

    switch (day) {
        case 'Lunes':
            console.log('El ' + day + msgLaborDay);
            break;
        case 'Martes':
            console.log('El ' + day + msgLaborDay);
            break;
        case 'Miércoles':
        case 'Miercoles':
            console.log('El ' + day + msgLaborDay);
            break;
        case 'Jueves':
            console.log('El ' + day + msgLaborDay);
            break;
        case 'Viernes':
            console.log('El ' + day + msgLaborDay);
            break;
        case 'Sábado':
        case 'Sabado':
            console.log('El ' + day + msgWeekendDay);
            break;
        case 'Domingo':
            console.log('El ' + day + msgWeekendDay);
            break;
        default:
            console.log(day + msgNotValidDay);
            break;
    }
}