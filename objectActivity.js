let car = {type: "Sedan", model: "Honda City", color: "white"};
console.log(typeof car);
//output:
//object

car.type = "Toyota";
console.log(car);
//output:
// { type: 'Toyota', model: 'Honda City', color: 'white' }

car.wheels = 4;
console.log(car);
//output:
// { type: 'Toyota', model: 'Honda City', color: 'white', wheels: 4 }

