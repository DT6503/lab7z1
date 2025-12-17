function countNegatives(array) {
    let count = 0;
    array.forEach(number => {
        if (number < 0) {
            count++;
        }
    });
    return count;
}

console.log(countNegatives([1, -2, 3, -4, 5]));        // 2
console.log(countNegatives([-1, -2, -3]));             // 3
console.log(countNegatives([1, 2, 3]));                // 0
