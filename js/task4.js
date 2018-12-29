var portland = new CreateCity('Portland', 619360, 'USA');
portland.getPopulation();
portland.getCityName();
portland.addCitizen();
portland.getPopulation();

function CreateCity(name, population, country) {
  this.name = name;
  this.population = population;
  this.country = country;
  this.getPopulation = function() {
    console.log(this.population);
  };
  this.getCityName = function() {
    console.log(this.name);
  };
  this.addCitizen = function() {
    this.population++;
  }
}