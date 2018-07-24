console.log('Init App: Workshop Clases 10 y 11')

var LS_KEY = 'studentsList'

// carga inicial de la app, busco en lS y lo que hay lo guardo en localList
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

var newStudentList = []
var localStudent
var newStudent

// con un for recorro localList, guardo cada estudiante como objeto adentro de newStudentList

for (var i = 0; i < localList.length; i++) {
  localStudent = localList[i]
  newStudent = new Student(
    localStudent.firstName,
    localStudent.lastName,
    localStudent.dni,
    localStudent.email
  )
  // via metodo push incluyo objeto newStudent a array de newStudentList
  newStudentList.push(newStudent)
}

// para incluir en html, creo nodos con lo que esta en newStudentList

var mainList = document.getElementById('mainlist')

for (var i = 0; i < newStudentList.length; i++) {
  var eachStudent = newStudentList[i]
  var newStudentItemOnLoad = document.createElement('li')
  newStudentItemOnLoad.id = +eachStudent.dni
  newStudentItemOnLoad.classList.add('list-group-item')
  newStudentItemOnLoad.innerHTML =
    '<h2>' +
    eachStudent.firstName +
    '</h2>' +
    '<h2>' +
    eachStudent.lastName +
    '</h2>' +
    '<h3>DNI: ' +
    eachStudent.dni +
    '</h3>' +
    '<h2>' +
    eachStudent.email +
    '</h2>'
  // despues de creado el nodo, appendeo a su parent
  mainList.appendChild(newStudentItemOnLoad)
}

// funcion constructora de objeto student

function Student (firstName, lastName, dni, email) {
  var id = dni

  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    if (lastName === undefined) {
      return firstName
    } else {
      return firstName + ' ' + lastName
    }
  }
}

// para capturar name y validarlo

// capturo firstName
var firstNameInputNode = document.getElementById('firstName')

// en el evento onblur invoco funcion validadora
firstNameInputNode.onblur = validateEmptyField

function validateEmptyField (e) {
  var inputNode = event.target
  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  // solo habilito boton si nombre y dni son validos (funciones mas abajo)
  if (
    dniInputNode.classList.contains('is-valid') &&
    firstNameInputNode.classList.contains('is-valid') &&
    emailInputNode.classList.contains('is-valid')
  ) {
    buttonAddStudent.classList.remove('disabled')
  } else {
    buttonAddStudent.classList.add('disabled')
  }
}

// capturo lastName tambien
var lastNameInputNode = document.getElementById('lastName')

// capturo DNI, y lo valido con funcion validadora de DNI

var dniInputNode = document.getElementById('dni')
// invoco funcion sobre evento onblur
dniInputNode.onblur = validateDniField

function validateDniField (e) {
  var inputNode = event.target

  // primero parseo, ya que el field me trae string
  var parsedValue = parseInt(inputNode, 10)
  // primero chequeo si existe o no, recorriendo array
  for (var i = 0; i < newStudentList.length; i++) {
    if (inputNode.value === newStudentList[i].dni) {
      var dniExists = true
      // si existe salgo
      break
    } else {
      var dniExists = false
    }
  }

  // valido todas las condiciones: que haya algo, que sea number, que no sea negativo, que no este repetido
  if (
    !inputNode.value ||
    isNaN(parsedValue || parsedValue < 0 || dniExists === true)
  ) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  // de acuerdo a resultado, habilito el boton
  if (
    dniInputNode.classList.contains('is-valid') &&
    firstNameInputNode.classList.contains('is-valid') &&
    emailInputNode.classList.contains('is-valid')
  ) {
    buttonAddStudent.classList.remove('disabled')
  } else {
    buttonAddStudent.classList.add('disabled')
  }
}

// capturo mail

var emailInputNode = document.getElementById('email')

// en evento onblur invoco funcion validadora
emailInputNode.onblur = checkValidEmail

// fucnion validadora
function checkValidEmail (e) {
  var node = event.target
  if (node.value.indexOf('@') >= 0 && node.value.indexOf('.') >= 0) {
    node.classList.remove('is-invalid')
    node.classList.add('is-valid')
  } else {
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
  }
  // de acuerdo a resultado habilito el boton
  if (
    dniInputNode.classList.contains('is-valid') &&
    firstNameInputNode.classList.contains('is-valid') &&
    emailInputNode.classList.contains('is-valid')
  ) {
    buttonAddStudent.classList.remove('disabled')
  } else {
    buttonAddStudent.classList.add('disabled')
  }
}

// capturo boton agregar alumno

var buttonAddStudent = document.getElementById('addStudentButton')

// sobre evento onclick invoco funcion enviarDatos

buttonAddStudent.onclick = enviarDatos

function enviarDatos () {
  // si no esta desabilitado el boton, avanzo
  if (!buttonAddStudent.classList.contains('disabled')) {
    var newStudentItem = document.createElement('li')
    // lleno nodo
    newStudentItem.innerHTML =
      '<h2>' +
      firstNameInputNode.value +
      '</h2>' +
      '<h2>' +
      lastNameInputNode.value +
      '</h2>' +
      '<h3>DNI: ' +
      dniInputNode.value +
      '</h3>' +
      '<h2>' +
      emailInputNode.value +
      '</h2>'
    newStudentItem.classList.add('list-group-item')
    newStudentItem.id += dniInputNode.value
    // appeandeo a parente, mainList, nodo creado
    mainList.appendChild(newStudentItem)
    // creo objeto newStudent mediante funcion constructora new Student
    newStudent = new Student(
      firstNameInputNode.value,
      lastNameInputNode.value,
      dniInputNode.value,
      emailInputNode.value
    )
    // con metodo push meto en array newStudentList
    newStudentList.push(newStudent)

    // actualizo localStorage
    var stringedList = JSON.stringify(newStudentList)
    localStorage.setItem(LS_KEY, stringedList)
  }
  // despues de todo, limpio el formulario
  firstNameInputNode.value = ''
  lastNameInputNode.value = ''
  dniInputNode.value = ''
  emailInputNode.value = ''
  buttonAddStudent.classList.add('disabled')
  firstNameInputNode.classList.remove('is-valid')
  dniInputNode.classList.remove('is-valid')
  emailInputNode.classList.remove('is-valid')
}

// para eliminar estudiante por el DNI

var deleteByDniInputNode = document.getElementById('deleteDni')

var deleteDniButton = document.getElementById('deleteStudentButton')

// en evento onblur invoco funcion checkDNI, para validacion dni
deleteByDniInputNode.onblur = checkDni

function checkDni (e) {
  var inputNode = event.target
  for (var i = 0; i < newStudentList.length; i++) {
    // primero valido que DNI a borrar exista
    if (inputNode.value === newStudentList[i].dni) {
      var dniExists = true
      break
    } else {
      var dniExists = false
    }
  }
  // si existe lo habilito boton
  if (dniExists === true) {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
    deleteDniButton.classList.remove('disabled')
  } else {
    // si no paso  inhabilito el boton
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  }
}

// en evento onclick invoco funcion deleteStudent

deleteDniButton.onclick = deleteStudent

function deleteStudent (e) {
  if (!deleteDniButton.classList.contains('disabled')) {
    for (var i = 0; i < newStudentList.length; i++) {
      if (deleteByDniInputNode.value === newStudentList[i].dni) {
        // con metodo de array, splice, lo borro del array, y corto sentencia∫
        newStudentList.splice(i, 1)
        break
      } else {
        console.log('No entro')
      }
    }
    // lo elimino del localStorage, asi lo actualizo
    localStorage.removeItem('studentsList')
    // recorro newStudentList, lcon funcion constructora vuelvo a crear newStudenListactualizado, y lo subo al localStorage
    for (var i = 0; i < newStudentList.length; i++) {
      localStudent = newStudentList[i]
      newStudent = new Student(
        localStudent.firstName,
        localStudent.lastName,
        localStudent.dni,
        localStudent.email
      )
      var parsdeNewJson = JSON.stringify(newStudentList)
      localStorage.setItem('studentsList', parsdeNewJson)
    }
    deleteDniButton.classList.add('disabled')
    deleteByDniInputNode.classList.remove('is-valid')
    // actualizo el HTML, borrando al estudiante
    var studentId = document.getElementById(
      deleteByDniInputNode.value.toString()
    )
    if (studentId) {
      studentId.parentNode.removeChild(studentId)
    } else {
      console.log('No entro')
    }
    deleteByDniInputNode.value = ''
  }
}

// funcion para buscar student por nombre

var searchStudentInputNode = document.getElementById('searchText')
var searchStudentButton = document.getElementById('searchStudentButton')
var searchStudentList = document.getElementById('searchList')

searchStudentButton.onclick = searchStudent

function searchStudent (event) {
  searchStudentList.innerHTML = ''
  var studentToSearch = searchStudentInputNode.value.toUpperCase()
  for (var i = 0; i < newStudentList.length; i++) {
    var studentsArrayFirstName = newStudentList[i].firstName.toUpperCase()
    var studentsArrayLastName = newStudentList[i].lastName.toUpperCase()
    if (
      studentToSearch &&
      (studentsArrayFirstName.indexOf(studentToSearch) !== -1 ||
        studentsArrayLastName.indexOf(studentToSearch) !== -1)
    ) {
      var newSearchedStudent = document.createElement('li')
      newSearchedStudent.innerHTML =
        '<h2>' +
        newStudentList[i].firstName +
        '</h2>' +
        '<h2>' +
        newStudentList[i].lastName +
        '</h2>' +
        '<h3>DNI: ' +
        newStudentList[i].dni +
        '</h3>' +
        '<h2>' +
        newStudentList[i].email +
        '</h2>'
      newSearchedStudent.classList.add('list-group-item')
      searchStudentList.appendChild(newSearchedStudent)
      break
    } else {
      searchStudentList.innerHTML = ''
    }
  }
}
