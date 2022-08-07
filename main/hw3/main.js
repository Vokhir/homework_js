// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// //     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let X = +prompt('Type any number.');
 if (X===0) {
     console.log('Incorrect')} else {console.log('Correct')}

 let a = 1;
if (a===0) {
    console.log('Incorrect')} else {console.log('Correct')}
a = 0;
if (a===0) {
    console.log('Incorrect')} else {console.log('Correct')}
a = -3;
if (a===0) {
    console.log('Incorrect')} else {console.log('Correct')}

// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).

let minutes = +prompt('Set a minute.')
 if (minutes>=0 && minutes<=14){
     console.log('First quarter')}
    else if (minutes>=15 && minutes<=29){
     console.log('Second quarter')}
    else if (minutes>=30 && minutes<=44){
     console.log('Third quarter')}
    else if (minutes>=45 && minutes<=59){
     console.log('Fourth quarter')}
    else    {console.log('Wrong numeric.')}

// // - У змінній day дано якесь число від 1 до 31.
// // Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=prompt('Write the day of the month.');
    if (day>=1 && day<=10){
     console.log('First decade')}
    else if (day>=11 && day<=20){
     console.log('Second decade')}
    else if (day>=21 && day<=31){
     console.log('Third decade')}
    else{
        console.log('Wrong numeric.')}

// // - Скласти розклад на тиждень за домопоги switch.
// //     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// //     (можна замість плану на день, назву дня англійською).

    let days=prompt('Type the day of the week to show the schedule: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.');
        switch (days){
            case 'Monday':
                console.log('Clean your teeth.');
                break;
            case 'Tuesday':
                console.log('Go for a walk.');
                break;
            case 'Wednesday':
                console.log('Wash yourself.');
                break;
            case 'Thursday':
                console.log('Read some news.');
                break;
            case 'Friday':
                console.log('Make a party.');
                break;
            case 'Saturday':
                console.log('Relax.');
                break;
            case 'Sunday':
                console.log('Prepare yourself for the next week.');
                break;
            default:
                console.log('Please, type the correct name of the day of the week.')

        }

// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.

let r = +prompt('Write the first quantity r.');
let y = +prompt('Write the second quantity y.');
    if (r>y){
        console.log(r)}
    else if (y>r){
        console.log(y)
    }
    else if (r===y){
        console.log('Quantity is equal.')
    }

// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// //     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// //     (хибноподыбне, тобто кастується до false)

let x = null || 'default';
console.log(x)