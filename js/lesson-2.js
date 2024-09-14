function findSmallerNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Input is not array";
  }
  // return Math.min(...numbers);
  let smallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

// const numbers = [ 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallerNumber(numbers));

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function findSmallerNumber2(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + numbers[i + 1]);
  }
  return result;
}

console.log(findSmallerNumber2(someArr));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage(...args) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < args.length; i++) {
    console.log(typeof args[i] === "number");
    if (typeof args[i] === "number") {
      total += args[i];
      count++;
    }
  }

  if (count === 0) {
    return "No valid numbers provided";
  }

  return total / count;
}

console.log(caclculateAverage(2, 6, 24, 7, 35, 24, "hello", 9, "world"));
