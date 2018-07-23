$(document).ready(function () {
  console.log('Init app: Desafio Clase 14')

  var elementToRemove = $('button')

  elementToRemove.on('click', removeElementWithAnimation)

  function removeElementWithAnimation (e) {
    $(this).parent().parent().hide(2000, function () {
      $(this).remove()
    })
  }
})
