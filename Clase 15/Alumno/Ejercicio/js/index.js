$('document').ready(function () {
  console.log('Init app: Ejercicio Clase 15')

  var urlBase = 'https://swapi.co/api/' + 'people/5/'

  getData(urlBase, getInfo)

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  function getInfo (error, data) {
    if (!error) {
      showPersonName(data)
    } else {
      console.log('Error: ', error)
    }
  }

  function showPersonName (person) {
    console.log(person.name + ' - ' + person.gender)
  }
})
