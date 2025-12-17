function getLength(array) {
    return array.length;
}

console.log(getLength([1, 2, 3]));           // 3
console.log(getLength(["a", "b", "c", "d"])); // 4
console.log(getLength([]));                  // 0
console.log(getLength([true, false]));       // 2