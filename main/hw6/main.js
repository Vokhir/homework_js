// - Знайти та вивести довижину настипних стрінгових значень

// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.length);
// let str1 = 'lorem ipsum';
// console.log(str1.length);
// let str2 = 'javascript is cool';
// console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.toUpperCase());
// let str1 = 'lorem ipsum';
// console.log(str1.toUpperCase());
// let str2 = 'javascript is cool';
// console.log(str2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
// let str1 = 'LOREM IPSUM';
// console.log(str1.toLowerCase());
// let str2 = 'JAVASCRIPT IS COOL';
// console.log(str2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.slice(str.indexOf('d'), str.indexOf('g' + 1)));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

//     let str = 'Ревуть воли як ясла повні';
//     let arr = str.split(' ');
//     console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

    // let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    // let map = nums.map(value => value.toString());
    // console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

    let nums = [11,21,3];
//     function directionUp(a,b) {
//         if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1
//     }
//     if (a === b) {
//         return 0
//     }}
//     function directionDown(a,b) {
//         if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1
//     }
//     if (a === b) {
//         return 0
//     }
//     }
//
// function sortNums() {
//
// }
//
//     console.log(nums.sortNums(directionUp));
//     console.log(nums.sortNums(directionDown));
    function sortNums(array, direction) {
        return
        if (direction === 'key2') {
            array.sort((a, b) => a+b)
        }
    else
        if (direction === 'key1') {
            array.sort((a, b) => a-b)
        }

    }

console.log(sortNums(nums, 'key1'));



// let sortNums = nums.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1
//     }
//     if (a === b) {
//         return 0
//     }
// });
//     console.log(sortNums); // [21,11,3]

// let nums = [11,21,3];
// let sortNums = nums.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1
//     }
//     if (a === b) {
//         return 0
//     }
// });
// console.log(sortNums); //[3,11,21]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let sort1 = coursesAndDurationArray.sort((a, b)=>{
//
//             if (a.monthDuration < b.monthDuration) {
//                 return 1;
//             }
//             if (a.monthDuration > b.monthDuration) {
//                 return -1
//             }
//             if (a.monthDuration === b.monthDuration) {
//                 return 0
//             }
// });
// console.log(sort1);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// function up5(sort1){
//     return sort1.monthDuration >= 5;
// }
// console.log(sort1.filter(up5));

// sort2 = sort1.filter(sort1 => sort1.monthDuration>=5);
// console.log(sort2);

// описати колоду карт

// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'},
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'},
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {value: 'Joker', color:'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'},
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {value: 'Joker', color:'black'},
// ]
// - знайти піковий туз

// let res = cards.filter(value => (value.cardSuit === 'clubs' && value.value === 'Ace'));
// console.log(res);

// - всі шістки

// let res = cards.filter(value => (value.value === 6));
// console.log(res);

// - всі червоні карти

// let res = cards.filter(value => (value.color === 'red'));
// console.log(res);

// - всі буби

// let res = cards.filter(value => (value.cardSuit === 'diamonds'));
// console.log(res);

// // - всі трефи від 9 та більше

// let res = cards.filter(function (value) {
//     return value.cardSuit === 'clubs' &&
//     value.value !== 8 &&
//     value.value !== 7 &&
//     value.value !== 6
// })
//
// console.log(res);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
//
// console.log(cards.reduce((accumulator, card) => {
//     if (card.cardSuit === 'diamonds') {
//         accumulator.diamonds.push(card);
//     } else if (card.cardSuit === 'clubs') {
//         accumulator.clubs.push(card);
//     } else if(card.cardSuit === 'spades') {
//         accumulator.spades.push(card);
//     } else if(card.cardSuit === 'hearts') {
//         accumulator.hearts.push(card);
//     }
//     return accumulator;
//     }, {
//         spades:[],
//         diamonds:[],
//         hearts:[],
//         clubs:[]
//     }))