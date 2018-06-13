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

      this.model = model;
      this.brand = brand;
      this.year = year;

      this.getCarName = function (){
          return 'El modelo es ' + model + ', la marca es ' + brand + ', el año del auto es ' + year + '.';
      }
  }

  var newCars = [];

  var car;
  var newCar;

  for(var i = 0; i < cars.length; i++){
    car = cars[i];
    newCar = new Car(car.model, car.brand, car.year);
    newCars.push(newCar);
  }

  console.log(newCars[1].getCarName());

