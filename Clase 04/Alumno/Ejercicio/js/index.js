console.log('Init app Ejercicio Clase 4');

var examResults = [ 7, 5, 6, 4, 3, 2, 8, 9, 2];

var message = 'El promedio de las notas es: ';

function calculateAverageNotes(arrayNotes) {
    
    var sumNotes = 0;
    var individualNote;
    var averageNotes;
    
    for (var i = 0; i < arrayNotes.length; i++) {
        individualNote = arrayNotes[i];
        sumNotes = sumNotes + individualNote;
    }
    
    averageNotes = sumNotes / arrayNotes.length;
    return averageNotes;
}

var avgNotes = calculateAverageNotes(examResults);

console.log(message + avgNotes);