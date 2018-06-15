console.log('Init app: Ejercicio Clase 6')

var numbers = [ 1, 2, 3, 4, 5 ]

function deleteElement (index, elements) {
  if (Array.isArray(elements)) {
    var elements2 = elements.slice()

    elements2.splice(index, 1)
    return elements2
  } else {
    return elements
  }
}

var modifiedElement = deleteElement(2, numbers)

console.log(modifiedElement)
