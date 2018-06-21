console.log('Init app: Desafio Clase 7')

function getLocalList (key) {
  if (typeof key === 'string') {
    var studentsList = localStorage.getItem(key)
    if (studentsList) {
      var parsedStudentsList = JSON.parse(studentsList)
      return parsedStudentsList
    } else {
      return []
    }
  }
}

var studentsList = getLocalList('studentsList')

if (studentsList) {
  console.log(studentsList)
}
if (studentsList.length) {
  console.log('Tiene guardados ' + studentsList.length + ' elementos')
} else {
  console.log('La lista esta vacia')
}
