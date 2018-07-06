console.log('Init app: Ejercicio Clase 12')

var squareJQNodes = $('.square')

squareJQNodes.click(setSquareOrCircle)

var player = true
var moves = 0

function setSquareOrCircle (event) {
  var squareJQNode = $(this)

  if (moves <= 9) {
    if (player) {
      squareJQNode.addClass('cross')
      moves++
    } else {
      squareJQNode.addClass('circle')
      moves++
    }
    player = !player
  } else {
    console.log('Limite de movimientos alcanzado')
  }
}
