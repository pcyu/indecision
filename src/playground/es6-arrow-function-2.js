const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

console.log(add(3, 5));

const user = {
  name: 'Peter',
  cities: ['Covington', 'Atlanta', 'Dalian'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numberArray: [2, 3, 4, 5],
  multiplyBy: 4,
  multiply() {
    return this.numberArray.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());