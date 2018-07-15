$(document).ready(function () {
  console.log('Init app: Desafio Clase 13 Domingo II')

  // capturo elementos html por id y lo asigno a vars
  var firstNameInputNode = $('#firstName')
  var emailInputNode = $('#email')
  var commentsInputNode = $('#comments')
  var submitInputNode = $('#submitButton')

  // handler blur, en one, invoco funcion de validacion
  firstNameInputNode.one('blur', validateTextField)
  emailInputNode.one('blur', validateEmailField)
  commentsInputNode.one('blur', validateTextField)

  // funciones

  function validateTextField (e) {
    // capturo target del event con el this y lo vuelvo objeto jquery y lo asigno a var inputNode
    var inputNode = $(this)

    // capturo valor del inputnode
    var value = inputNode.val()
    // remuevo nodo siguiente al inputNode
    inputNode.next().remove()

    var errorText = ''

    if (!value) {
      errorText = 'Campo requerido'
    }

    if (errorText) {
      // creo nodo parent
      var parentNode = inputNode.parent()
      // appendeo a nodo parent div html con errorText
      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
    } else {
      // siempre remuevo primero
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateTextField)
    }

    validateButton()
  }

  function validateEmailField (e) {
    var inputNode = $(this)

    var value = inputNode.val()
    // elimino validacion de posible error anterior
    inputNode.next().remove()

    var errorText = ''

    // cuando valido voy llenando el errorText
    if (!value) {
      errorText = 'Campo requerido'
    } else {
      if (value.indexOf('@') === -1) {
        errorText = 'Falta el @ '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Falta el punto (.)'
      }
    }

    if (errorText) {
      // creo nodo parent
      var parentNode = inputNode.parent()
      // appendeo a nodo parent div html con errorText
      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
    } else {
      // siempre remuevo primero
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
    }

    validateButton()
  }

  function validateButton (e) {
    // capturo class valid en un var objeto jquery
    var validInputNodes = $('.is-valid')

    if (validInputNodes.length === 3) {
      submitInputNode.attr('disabled', false)
    } else {
      submitInputNode.attr('disabled', true)
    }
  }
})
