//variables
let length = 5;
let width = 5;
let area = length * width;

console.log(`The result is ${area}`);
console.log(
  `if the length of a rectangle is ${length}, and width is ${width} then the area is ${area}`
);

//list
favorite_animals = ["dog", "cat", "monkey", "rabbit"];

favorite_animals.pop();
console.log(favorite_animals);

favorite_animals.splice(1, 1);
console.log(favorite_animals);

favorite_animals.push("gazelle");
console.log(favorite_animals);

//functions
function cube(number) {
  return number ** 3;
}
console.log(cube(9));

function by_three(number) {
  if (number % 3 == 0) {
    result = number ** 3;
    return result;
  } else {
    return false;
  }
}
console.log(by_three(6));
