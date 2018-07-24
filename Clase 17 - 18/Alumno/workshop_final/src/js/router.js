import crossroads from 'crossroads'

crossroads.addRoute('/', function () {
  console.log('Home page')
})

// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
  crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)

// pruebo agregar addRoute a contact page

crossroads.addRoute('#/contact', function () {
  console.log('Contact page')
})
