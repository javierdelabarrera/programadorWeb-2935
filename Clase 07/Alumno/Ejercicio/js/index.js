console.log('Init app: Ejercicio Clase 7')

var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

function saveLocalList (key, studentsList) {
  if (typeof key === 'string' && Array.isArray(studentsList)) {
    var stringifiedstudentsList = JSON.stringify(studentsList)
    localStorage.setItem('list', stringifiedstudentsList)
  }
}

saveLocalList('key', studentsList)
