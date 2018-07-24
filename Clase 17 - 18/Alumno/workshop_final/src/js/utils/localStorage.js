// funcion getLocalList trae lista en formato js del localStorage
// si no existe trae array vacio

function getLocalList (key) {
  if (typeof key === 'string') {
    var localList = localStorage.getItem(key)
    if (localList) {
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      return []
    }
  }
}

// funcion setLocalList guarda lista en lS en formato JSON

function setLocalList (key, list) {
  if (typeof key === 'string' && Array.isArray(list)) {
    var strList = JSON.stringify(list)
    localStorage.setItem(key, strList)
  }
}

export { getLocalList, setLocalList }
