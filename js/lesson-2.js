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
