console.log('Init app: Desafio Clase 7')

function getLocalList (key) {
  if (typeof key === 'string') {
    var studentsList = localStorage.getItem(key)
    if (studentsList) {
      var parsedStudentsList = JSON.parse(studentsList)
      return parsedStudentsList
    } else {
      studentsList = [ '' ]
      return studentsList
    }
  } else {
    console.log('Ingrese key valida')
  }
}

console.log(getLocalList('studentsList'))
