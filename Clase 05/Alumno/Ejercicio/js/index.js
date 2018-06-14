console.log('Init app: Ejercicio Clase 5');

// array con datos de prueba/entrada

var cars = [
    {
      model:'Suran',
      brand: 'Volkswagen',
      year: 2015
    },
    {
      model:'Audi TT',
      brand:'Audi',
      year: 2017
    },
    {
      model:'Gran turismo',
      brand:'Maserati',
      year: 2018
    },
    {
        model:'Toro',
        brand:'Fiat',
        year: 2017
      }
  ]

  // function constructor

  function Car (model,brand,year){
      var id = Math.random();

    // propiedades publicas
      this.model = model;
      this.brand = brand;
      this.year = year;

    // metodos publicos (agregamos el this. en el return, xq si no va directo al input original, xq prop seria priv)
      this.getCarName = function (){
          return 'El modelo es ' + this.model + ', la marca es ' + this.brand + ', el año del auto es ' + this.year + '.';
      }
  }


  // aca creamos array de objetos de instanciados

  var newCars = [];

  var car;
  var newCar;

  for(var i = 0; i < cars.length; i++){
    car = cars[i];
    newCar = new Car(car.model, car.brand, car.year);
    newCars.push(newCar);
  }

  console.log(newCars[1].getCarName());

