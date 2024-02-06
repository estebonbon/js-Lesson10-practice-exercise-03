const person = {
  name: "Alice",
  lastName: "Parker", // removed the "=" sign
  student: true, // Replaced the capital T in true;
};

console.log(person.student); // Replaced Alice with person.

console.log(person.lastName);

console.log(person.name);

person.totalSteps = 200; // Added a capital S in totalSteps

person.walk = function (steps) {
  this.totalSteps += steps;
};

person.walk(250);

console.log(person.totalSteps);
