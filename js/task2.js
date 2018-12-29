var firstObjForDoubledTrippled = {
  number: 4
};

var secondObjForDoubledTrippled = {
  number: 8
};

var getDoubledInContext = getDoubled.bind(secondObjForDoubledTrippled);

console.log(getDoubledInContext());
console.log(getDoubled.call(firstObjForDoubledTrippled));
console.log(getDoubledTrippled.call(null, getDoubled.bind(firstObjForDoubledTrippled)));

function getDoubled() {
  return this.number * 2;
}

function getDoubledTrippled(func) {
  return func() * 3;
}

