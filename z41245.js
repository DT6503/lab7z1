//4.1 есть ли у объекта obj свойство key
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}

//4.2 возвращает строку со всеми ключами объекта через запятую
function getKeys(obj) {
    return Object.keys(obj).join(', ');//join - объединяет все элементы массива в одну строку (каждый элемент вывоится через ,)
}

//4.4  удаляет свойство key из объекта obj.
function removeKey(obj, key) {
    delete obj[key];
}

//4.5 проверяет, равно ли значение свойства key в объекте obj переданному значению value.
function isValueEqual(obj, key, value) {
    return obj[key] === value;
}

// создаю тестовый объект
const person = {
    name: 'Anna',
    age: 25,
    city: 'Moscow'
};

//
console.log(hasKey(person, 'name')); // true
console.log(hasKey(person, 'country')); // false

console.log(getKeys(person)); // "name, age, city"

console.log(isValueEqual(person, 'age', 25)); // true
console.log(isValueEqual(person, 'city', 'London')); // false

removeKey(person, 'age');
console.log(getKeys(person)); // "name, city"
console.log(person); // { name: 'Anna', city: 'Moscow' }