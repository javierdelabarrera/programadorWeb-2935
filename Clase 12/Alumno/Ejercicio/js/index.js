console.log('Init app: Ejercicio Clase 12')

var squareJQNodes = $('.square')

squareJQNodes.click(setSquareOrCircle)

var player = true

function setSquareOrCircle (event) {
  var squareJQNode = $(this)

  if (!(squareJQNode.hasClass('circle') || squareJQNode.hasClass('circle'))) {
    if (player) {
      squareJQNode.addClass('cross')
    } else {
      squareJQNode.addClass('circle')
    }
    player = !player
  }
}
