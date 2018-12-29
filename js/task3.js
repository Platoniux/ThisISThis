var dodge = new CreateTheCar('Dodge', 1995, '1000384 km', 'black');
var chevrolet = new CreateTheCar('Chevrolet', 1989, '10003898984 km', 'red');
console.log(dodge);
console.log(chevrolet);

function CreateTheCar(model, year, mileage, color) {
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  this.color = color;
  this.ignitionOnOff = function(val) {
    this.ignition = val;
  };
  this.moveOn = function() {
    if (this.ignition) {
      console.log('The car model ' + this.model + ' color ' + this.color + ' move on!');
    } else {
      console.log('Please, turn on ignition');
    }
  };
  this.turnOff = function() {
    if (this.ignition) {
      this.ignition = false;
      console.log(this.model + ' was stopped.');
    } else {
      console.log('Ignition has already off.');
    }
  };
  this.amountOfFuel = Math.random();
  this.checkFuel = function() {
    if (this.amountOfFuel < 0.7) {
      console.log('Car wants to eat!))');
    } else {
      console.log('Car is full!');
    }
  };
  this.fillTheCar = function() {
    while (this.amountOfFuel < 0.7) {
      this.amountOfFuel = Math.random();
    }
    console.log('Car was filled');
  };
}