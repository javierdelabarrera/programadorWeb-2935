$('document').ready(function () {
  console.log('Init app: Desafio Clase 15 II')

  var urlBase = 'https://swapi.co/api/' + 'people/'

  // invoco funcion con url y funcion callback
  getData(urlBase, getInfo)

  // function que muestra todos los nombres
  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  // funcion callback
  function getInfo (error, data) {
    if (!error) {
      // llamo a funcion que muestra nombres
      showPeopleName(data.results)
      console.log('----------')
      // if por si hay mas de 10 personajes
      if (data.next) {
        $('#showMore').one('click', function () {
          // al apretar boton showMore, vuelvo a llamar a funcion getData (recursividad), y como url le paso data.next
          getData(data.next, getInfo)
        })
      } else {
        // si no hay mas, remuevo el boton
        $('#showMore').remove()
      }
    } else {
      console.log('Error: ', error)
    }
  }

  // funcion que muestra por consola nombres de los personajes
  function showPeopleName (results) {
    var person
    // con un for recorro array de resultados e imprimo por consola
    for (var i = 0; i < results.length; i++) {
      person = results[i]
      console.log(person.name)
    }
  }
})
