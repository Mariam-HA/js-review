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

//functions extra
let costsPerHour;
function padelCourtcost(hour, courtType) {
  if (courtType === "indoors") {
    costsPerHour = 30;
  } else if (courtType === "outdoors") {
    costsPerHour = 20;
  } else {
    console.log("Invalid");
  }
  let padelCourtCost = costsPerHour * hour;
  if (hour >= 3) {
    padelCourtCost = padelCourtCost * 0.8;
  }
  return padelCourtCost;
}
console.log(padelCourtcost(7, "indoors"));

//functions and loops
//part1

temperature = [25, 26, 27, 28];
function printer(elements) {
  console.log(elements, "C");
}
temperature.forEach(printer);

//part2
const tempF = [99, 88, 77, 100];

function toCelsius(numbers) {
  return (numbers - 32) * (5 / 9);
}
const Celsius = tempF.map(toCelsius); // to create a new array from calling a function for every array element

console.log(Celsius);

//functions advanced

// 1
function convert(num) {
  return num / 60;
}
console.log("The time in minutes =", convert(120));

//2
function isOdd(number) {
  if (number % 2 == 1) {
    return true;
  }
  return false;
}
console.log(isOdd(6));

//3
array = [1, 2, 3, 4, 5, 6, 7, 8];
let addNumber = (num) => {
  return array[0] + array[array.length - 1];
};
console.log("The sum of the first and last element = ", addNumber());

//4
function isArrayLengthEven(number) {
  if (array.length % 2 == 0) {
    return true;
  }
  return false;
}
console.log(isArrayLengthEven(array));
