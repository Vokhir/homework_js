// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minofNumbers = (a, b, c)=>{
    if (a<b && a<c){
        console.log(a);
    }
    else if (b<a && b<c){
        console.log(b);
    }
    else if (c<a && c<b){
        console.log(c);
    }
}

minofNumbers(4, 12, -46);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxfNumbers = (a, b, c)=>{
    if (a>b && a>c){
        console.log(a);
    }
    else if (b>a && b>c){
        console.log(b);
    }
    else if (c>a && c>b){
        console.log(c);
    }
}

maxfNumbers(4, 12, -46);
// - створити функцію яка повертає найбільше число з масиву
let num = [3, -13, 845, 35, 10234, 11, -324, -1234];
function maxofNum(array) {
    return array.reduce((prev, curr) => prev > curr ? prev : curr, undefined)
}

let result = maxofNum(num);
console.log(result);
// - створити функцію яка повертає найменьше число з масиву
let numer = [3, -13, 845, 35, 10234, 11, -324, -1234];
function maxofNumbers(array) {
    return array.reduce((prev, curr) => prev < curr ? prev : curr, undefined)
}

let resulting = maxofNumbers(numer);
console.log(resulting);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numArray = [3, -13, 845, 35, 10234, 11, -324, -1234];
function sumofNumbers(array) {
    return array.reduce(function(a, b){
        return a + b;
    }, 0);
}

let res = sumofNumbers(numArray);
console.log(res);



// - Дано натуральное число n. Выведите все числа от 1 до n.

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]