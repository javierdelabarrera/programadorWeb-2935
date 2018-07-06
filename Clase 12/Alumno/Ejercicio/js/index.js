console.log('Init app: Ejercicio Clase 12')

var squareJQNodes = $('.square')

squareJQNodes.click(setSquareOrCircle)

var play = true
var moves = 0

function setSquareOrCircle (event) {
  var squareJQNode = $(this)

  if (moves <= 9) {
    if (play) {
      squareJQNode.addClass('cross')
      play = false
      moves++
    } else {
      squareJQNode.addClass('circle')
      play = true
      moves++
    }
  } else {
    console.log('Limite de movimientos alcanzado')
  }
}
