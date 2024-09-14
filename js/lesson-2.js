function findSmallerNumber(numbers){
    if (!Array.isArray(numbers)){
        return "Input is not array";
    }
    // return Math.min(...numbers);
    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest= numbers[i]
        }
    }
    return smallest;
}

const numbers = [ 5, 35, 56, 12, 24, 7, 80, 3];
console.log(findSmallerNumber(numbers));