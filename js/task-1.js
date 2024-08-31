function getMinute(minute) {
    if (minute <= 15) {
        return "Належить 1 частині";
    } else if (minute > 15 && minute <= 30) {
        return "Належить 2 частині";
    } else if (minute > 30 && minute <= 45 ) {
        return "Належить 3 частині";
    }
    else if (minute < 60 ){
        return "Належить 4 частині";
    } else {
        return "Введіть число від 0 до 59";
    }

}

console.log(getMinute(35));
console.log(getMinute(115));

