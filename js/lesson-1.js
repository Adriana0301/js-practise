//~ У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).

// function getMinute(minute) {
//     if (minute <= 15) {
//         return "Належить 1 частині";
//     } else if (minute > 15 && minute <= 30) {
//         return "Належить 2 частині";
//     } else if (minute > 30 && minute <= 45 ) {
//         return "Належить 3 частині";
//     }
//     else if (minute < 60 ){
//         return "Належить 4 частині";
//     } else {
//         return "Введіть число від 0 до 59";
//     }

// }

// console.log(getMinute(35));
// console.log(getMinute(115));


//~ Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

function getSeasonByNumber() {
  let valueSeason = prompt("Введіть число від 1 до 4");
  let result = "";

  switch (Number(valueSeason)) {
    case 1:
      result = "Зима";
      break;
    case 2:
      result = "Весна";
      break;
    case 3:
      result = "Літо";
          break;
      case 4:
      result = "Осінь";
      break;
    default:
      result = "Ввели не вірне значення";
      break;
  }

  return result;
}

// getSeasonByNumber();

// /~ Створи функцію logNumbers яка приймає min і max
//~ і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max
function logNumbers(min, max) {
    let total = 0;
    for (let i = max; i >= min; i -= 1) {
        if (i % 2 === 0) {
            total += i;
            // console.log(i);
            
        }
       //console.log(i);
        
    }
    return total;
}
// console.log(logNumbers(10, 20));

