function isEqual(obj1, obj2){
    return obj1===obj2;
}

const obj3 = {name: "Anna", age: 25 };
const obj4 = { name: "Anna", age: 25 };
const obj5 = obj3; // та же самая ссылка

console.log("obj3 === obj4:", isEqual(obj3, obj4)); // false
console.log("obj3 === obj5:", isEqual(obj3, obj5)); // true