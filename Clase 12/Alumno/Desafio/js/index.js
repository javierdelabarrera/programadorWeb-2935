console.log('Init app: Desafio Clase 12')

// capturo input sobre field de email
var inputEmailJQNode = $('#email')

// invoco funcion validateEmail en evento blur de field de email
inputEmailJQNode.blur(validateEmail)

// funcion validadora de mail
function validateEmail (event) {
  var jqNode = $(this)

  if (
    jqNode.val() &&
    jqNode.val().indexOf('@') !== -1 &&
    jqNode.val().indexOf('.') !== -1
  ) {
    console.log('email correcto')
    jqNode.addClass('is-valid').removeClass('is-invalid')
  } else {
    console.log('email incorrecto')
    jqNode.addClass('is-invalid').removeClass('is-valid')
  }
}
