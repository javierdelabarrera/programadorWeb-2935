console.log('Init app: Ejercicio Clase 8')

var texts = [ 'Ed', 'Edd', 'Eddy' ]

var mainListNode = document.getElementById('mainList')
mainListNode.innerHTML = ''

var individualText

for (var i = 0; i < texts.length; i++) {
  individualText = document.createElement('li')
  individualText.className = 'list-group-item'
  individualText.innerHTML = texts[i]
  individualText.id = i
  mainListNode.appendChild(individualText)
}
