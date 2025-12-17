function trimSpaces(str) {
    return str.trim();
}

console.log(trimSpaces("  Hello  "));     // "Hello"
console.log(trimSpaces("   JavaScript   ")); // "JavaScript"
console.log(trimSpaces("No spaces"));     // "No spaces"