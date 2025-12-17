function contains(str, subStr) {
    return str.includes(subStr);
}

console.log(contains("Hello World", "World"));  // true
console.log(contains("Hello", "hi"));          // false
