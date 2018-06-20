console.log('Init app: Desafio Clase 6')

function parcialMatch (searchedText, completeText) {
  if (typeof searchedText === 'string' && typeof completeText === 'string') {
    var searchedTextUpperCase = searchedText.toUpperCase()
    var completeTextUpperCase = completeText.toUpperCase()

    if (completeTextUpperCase.indexOf(searchedTextUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

console.log(parcialMatch('Pa', 'Patricia')) // true

console.log(parcialMatch('Patricia', 'Pa')) // false

console.log(parcialMatch(2, 'Pa')) // false

console.log(parcialMatch('P', 'Patricia')) // true

console.log(parcialMatch('Pn', 'Patricia')) // false
