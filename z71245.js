
/*map используется для преобразования 
каждого элемента массива и создания нового 
массива с результатами.*/


//возвращает новый массив, содержащий квадраты чисел из исходного массива
function squareNumbers(array) {
    return array.map(function(number) {
        return number * number;
    });
}
//возвращает массив, в котором каждый элемент исходного массива множен на 2
function doubleElements(array) {
    return array.map(function(number) {
        return number * 2;
    });
}
//возвращает массив строк с добавленным префиксом к каждому элементу
function addPrefix(array, prefix) {
    return array.map(function(element) {
        return prefix + element;
    });
}
//преобразует все числа массива в строки и возвращает новый массив
function numbersToStrings(array) {
    return array.map(function(number) {
        return number.toString();
    });
}
//''  и "" - нет разницы

const numbers = [1, 2, 3, 4, 5];
const words = ['apple', 'banana', 'orange'];

console.log("=== Квадраты чисел ===");
console.log(squareNumbers(numbers)); // [1, 4, 9, 16, 25]

console.log("=== Удвоение элементов ===");
console.log(doubleElements(numbers)); // [2, 4, 6, 8, 10]

console.log("=== Добавление префикса ===");
console.log(addPrefix(words, 'fruit_')); // ['fruit_apple', 'fruit_banana', 'fruit_orange']

console.log("=== Числа в строки ===");
console.log(numbersToStrings(numbers)); // ['1', '2', '3', '4', '5']