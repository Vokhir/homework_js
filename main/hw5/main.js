// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a + b;
}
let resu = rectangleArea(12, 34);
console.log(resu);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(radius) {
    return 3.14 * (radius * radius);
}
let resul = circleArea(57);
console.log(resul);
// - створити функцію яка
// обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(heigh, radius) {
    return 2 * 3.14 * radius * (radius + heigh);

}

let result = cylinderArea(40, 20);
console.log(result);
// - створити функцію яка приймає масив та виводить кожен його елемент
function itemofArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
itemofArray(listOfItems);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writeText(text) {
    document.write(`<p>${text}</p>`)
}

writeText('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listofList(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

let y = 'something';
listofList(y);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listwithList(text, number) {
    document.write(`<ul>`);
    let i = 0
    while (i<number){
        document.write(`<li>${text}</li>`);
        i++;
    }
    document.write(`</ul>`);
}
listwithList('tom',7)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listofArray() {
    document.write(`<ul>`);
    for (const arrayElement of arguments) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`);
}
listofArray(45, 'train', true, -34, 'something')
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasyl', age: 31, status: false},
    {name: 'petro', age: 30, status: true},
    {name: 'mykola', age: 29, status: true},
    {name: 'olga', age: 28, status: false},
    {name: 'maxym', age: 30, status: true},
    {name: 'anna', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andriy', age: 29, status: true},
    {name: 'mariya', age: 30, status: true},
    {name: 'olga', age: 31, status: false},
    {name: 'maxym', age: 31, status: true}
];
function arrayBlocks(array) {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<div><div>${arrayElement.name} ${arrayElement.age} ${arrayElement.status}</div>`)
    }
    document.write(`</ul>`);
}

arrayBlocks(users);
// - створити функцію яка повертає найменьше число з масиву
function minofNumbers(array) {
    return array.reduce((prev, curr) => prev < curr ? prev : curr, undefined)
}


let numer = [3, -14, 546, -3987, 1];
let resulting = minofNumbers(numer);
console.log(resulting);




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumofNumbers(array) {
    return array.reduce(function(a, b){
        return a + b;
    }, 0);
}

let numArray = [1, 34, 23, -1111384, 3987536, 0.3];
let res = sumofNumbers(numArray);
console.log(res);