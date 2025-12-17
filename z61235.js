//выводит каждый элемент массива в консоль
function logElements(array) {
    array.forEach(function(element) { //function - ф-ция для каждого эл-та массива
        console.log(element);
    });
}

//считает и возвращает сумму всех чисел в массиве
function sumArray(array) {
    let sum = 0;
    array.forEach(function(number) {
        sum += number;
    });
    return sum;
}
// выводит строки массива в верхнем регистре (без изменения массива)
function toUpperCase(array) {
    array.forEach(function(element) {
        console.log(element.toUpperCase());
    });
}

//выводит только чётные числа из массива в консоль
function logEven(array) {
    array.forEach(function(number) {
        if (number % 2 === 0) {
            console.log(number);
        }
    });
}


const numbers = [1, 2, 3, 4, 5];
const words = ['apple', 'banana', 'orange'];

console.log("=== Вывод всех элементов ===");
logElements(words);
// apple
// banana
// orange

console.log("=== Сумма чисел ===");
console.log(sumArray(numbers)); // 15

console.log("=== Строки в верхнем регистре ===");
toUpperCase(words);
// APPLE
// BANANA
// ORANGE

console.log("=== Чётные числа ===");
logEven(numbers);
// 2
// 4
