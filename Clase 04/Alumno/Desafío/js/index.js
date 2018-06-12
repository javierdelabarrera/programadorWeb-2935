console.log('Init app Desafio Clase 4');

var nameInput = prompt('Ingrese un nombre');
var studentPosition = -1;

var messageNotFound = 'No se pudo encontrar al estudiante';
var messageFound = 'Se encontró al estudiante en la posición ';

var studentsList = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 45678983
    }
  ]


  function searchStudentName(nameInput, studentsList) {
      var student;
      for (var i = 0; i <studentsList.length; i++) {
        student = studentsList[i];
        
        
        if (nameInput === student.firstName || nameInput === student.lastName) {
            studentPosition = i;
            break;
        }
      }
      return studentPosition;
  }

  var studentFoundPosition = searchStudentName(nameInput, studentsList);

  if (studentPosition < 0) {
      console.log(messageNotFound);
  } else {
      console.log(messageFound + studentPosition)
  }
