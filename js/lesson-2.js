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

// console.log(findSmallerNumber2(someArr));

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

// console.log(caclculateAverage(2, 6, 24, 7, 35, 24, "hello", 9, "world"));

//Напишіть функцію makeInvetedString(), яка замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

function makeInvetedString(string) {
  let strNew = ``;
  for (const str of string) {
    if (str === str.toUpperCase()) {
      strNew += str.toLowerCase();
    } else {
      strNew += str.toUpperCase();
    }
  }
  return strNew;
}

// console.log(makeInvetedString(`JavaScript`));
// console.log(makeInvetedString(`jAVAsCRIPT`));

//Напишіть функцію getUniqueValues(arr), яка повертає масив,
//містить лише унікальні елементи arr.

const words = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "JS",
  "CSS",
  "JS",
  "Node.js",
  "JS",
  "React",
  "CSS",
  "React",
  "HTML",
  "Node.js",
];

function getUniqueValues(arr) {
  const arrNew = [];

  for (const element of arr) {
    if (!arrNew.includes(element)) {
      arrNew.push(element);
    }
  }
  return arrNew;
}

// console.log(getUniqueValues(words))

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

function sumSalaries(salaries) {
  const salaryArray = Object.values(salaries);

  if (salaryArray.length === 0) {
    return 0;
  }

  let sum = 0;

  for (const salary of salaryArray) {
    sum += salary;
  }

  return sum;
}

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

console.log(sumSalaries(salaries));
