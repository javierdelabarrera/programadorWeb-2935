console.log('Init App: Workshop 10 11')

var LS_KEY = 'studentsList'

// carga inicial de la app a traves de funcion getLocalList
localList = getLocalList(LS_KEY)

// con getLocalList levanto lista del Local Storage (funcion de desafio clase 7)
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
