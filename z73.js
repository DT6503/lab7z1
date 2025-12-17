function getFirstLetters(array) {
    return array.map(word => word[0]);
}

console.log(getFirstLetters(["Apple", "Banana", "Cherry"])); // ["A", "B", "C"]
console.log(getFirstLetters(["cat", "dog", "elephant"]));    // ["c", "d", "e"]
