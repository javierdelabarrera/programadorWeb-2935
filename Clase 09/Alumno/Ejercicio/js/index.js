console.log('Init app: Ejercicio Clase 9')

// Capturo input
var inputNameNode = document.getElementById('firstName')

// asigno funcion de validacion a handler onblur
inputNameNode.onblur = validateName

// funcion de validacion de name field
function validateName (event) {
  var node = event.target

  if (node.value) {
    console.log('Name OK')
    node.classList.remove('is-invalid')
    node.classList.add('is-valid')
  } else {
    console.log('Name Not OK')
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
  }
}
