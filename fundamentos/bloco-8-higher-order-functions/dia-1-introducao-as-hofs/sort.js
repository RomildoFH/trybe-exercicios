const numbers = [1, 3, 10, 18, 9];

numbers.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;        
    }
    return 0;
})

console.log(numbers);