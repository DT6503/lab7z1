function isTrue(value) {
    return value === true;
}

console.log(isTrue(true));     // true
console.log(isTrue(false));    // false
console.log(isTrue(1));        // false
console.log(isTrue("true"));   // false
console.log(isTrue(null));     // false