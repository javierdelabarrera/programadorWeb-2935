console.log('Init app: Desafio Clase 9')

// Capturo input
var inputEmailNode = document.getElementById('email')

// asigno funcion de validacion a captura de handler onblur
inputEmailNode.onblur = validateEmail

// funcion de validacion de mail
function validateEmail (event) {
  var node = event.target

  if (node.value.length > 0 && node.value.indexOf('@') !== -1 && node.value.indexOf('.') !== -1) {
    console.log('Email correcto')
    node.classList.remove('is-invalid')
    node.classList.add('is-valid')
  } else {
    console.log('Email incorrecto')
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
  }
}
