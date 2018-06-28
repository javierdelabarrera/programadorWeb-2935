console.log('Init app: Desafio Clase 8')

// datos de prueba
var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

// function constructor de clase 5

function Student (firstName, lastName, dni, email) {
  var id = dni

  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  this.getId = function () {
    return 'El id del estudiante es: ' + id
  }

  // de esta manera salvo caso que no tiene last name
  this.getFullName = function () {
    return (this.firstName || '') + ' ' + (this.lastName || '')
  }
}

// funcion que devuelve nodo li alumno

function createStudentNode (newStudent) {
  // creo nodo li y lo asigno a var liNode
  var liNode = document.createElement('li')

  // le asigno id al nodo con el public method getId
  liNode.id = newStudent.getId()

  // seteo class al nodo
  liNode.className = 'list-group-item'

  // con innerHTML le agrego contenido al nodo creado
  liNode.innerHTML =
    '<h1>' +
    newStudent.getFullName() +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  // la funcion hace un return del nodo creado con todos los datos asignados
  return liNode
}

// ahora creo nodo objeto estudiante
var newStudent = new Student(
  student.firstName,
  student.lastName,
  student.dni,
  student.email
)

// creo nodo y ke paso objeto estudiante (newStudent)
var studentNode = createStudentNode(newStudent)

console.log(studentNode)
