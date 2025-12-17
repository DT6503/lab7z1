function createArray(start, end) {
    let result = []; //массив
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}


console.log(createArray(1, 5));   // [1, 2, 3, 4, 5] 
console.log(createArray(3, 7));   // [3, 4, 5, 6, 7]
console.log(createArray(-2, 2));  // [-2, -1, 0, 1, 2]