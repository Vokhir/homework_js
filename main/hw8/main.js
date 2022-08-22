// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// //
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// //
// // let book = [
// //     new User(456, 'Susan', 'Peer', 'uglo@gmail.com', +94759475948),
// //     new User(567, 'Peter', 'Swan', 'dfgds@gmail.com', +34853948759374),
// //     new User(396, 'Stan', 'Neel', 'cxvbsdfdg@gmail.com', +3487653847),
// //     new User(684, 'Iryna', 'Star', 'sfdfgsg@gmail.com', +348765299384),
// //     new User(184, 'Maxym', 'Galyn', 'wertwert@gmail.com', +94579845053),
// //     new User(937, 'Karl', 'Rox', 'vbsdfbsddfs@gmail.com', +982638452873),
// //     new User(991, 'Sten', 'Duffon', 'fgsgrfssdf@gmail.com', +736483748593),
// //     new User(943, 'Michel', 'Grey', 'dfsgertbb@gmail.com', +28372349890),
// //     new User(173, 'Rody', 'Boiko', 'ksdkvbksjd@gmail.com', +87465934453),
// //     new User(475, 'Sten', 'Khmara', 'jsdbfsybdfiv@gmail.com', +8734659340530)
// // ];
// //
// //
// //
// // // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// // function filterOfArrayObjects(array) {
// //     let filtered = [];
// //     for (const filteredElement of array) {
// //         if (filteredElement.id % 2){
// //             NaN;
// //         } else {
// //             filtered[filtered.length] = filteredElement;
// //         }
// //     }
// //     return filtered;
// // }
// //
// // let filteredUsers = filterOfArrayObjects(book);
// // console.log(filteredUsers);
// //
// // // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// // function sortOfArray(array, key) {
// //     return array.sort((a, b) => a[key] - b[key]);
// // // }
// // //
// // // let sortedArray = sortOfArray(book,'id');
// // // console.log(sortedArray);
// //
// // // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // // створити пустий масив, наповнити його 10 об'єктами Client
// //
// // class Client {
// //     constructor(id, name, surname, email, phone, order) {
// //         User.apply(this, arguments)
// //         this.order = order;
// //     }
// // }
// // let clientList= [
// //     new Client(756, 'Susan', 'Great', 'holy@gmail.com', 348738573493849,[45,23423,23423]),
// // new Client(457567, 'Frank', 'Stoned', 'sdfsd@gmail.com', 89234872,['custom',75,24]),
// // new Client(4564, 'Karen', 'Snout', 'sdgee@gmail.com', 7465485690,['efgdfgj','dfgdfgd']),
// // new Client(2346, 'Sergiy', 'Myroshnichenko', 'cvbfg@gmail.com', 634834793,[45,23423,23423,'sdfsdf']),
// // new Client(986, 'Karl', 'Lotr', 'kjndofun@gmail.com', 98234982739,[756,4,29,48,3434,3456,5342]),
// // new Client(34645, 'Sten', 'Marsh', 'dkfungk@gmail.com', 23929747575,[45]),
// // new Client(4564, 'Ronny', 'Mask', 'dfkugkd@gmail.com', 7365537494,[123123,34534,656454,453]),
// // new Client(45655, 'Fred', 'Stewart', 'cbucov@gmail.com', 23443848273,['sdgfsd','sdfsfretgg','cvbcngh','dfgr']),
// // new Client(567463, 'Mary', 'Branson', 'oiwerurh@gmail.com', 1746589505,[1875,20875,73664,193874]),
// // new Client(345634, 'Karen', 'Milly', 'qiuhc@gmail.com', 763483874893,[58736,875,937,93874,385,38775])
// // ]
// //
// // console.log(clientList);
// //
// // // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
// // function sortOfSecondArray(array, key) {
// //     return array.sort((a, b) => a[key].length - b[key].length);
// // }
// //
// // let sorted = sortOfSecondArray(clientList, 'order');
// // console.log(sorted);
//
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// function Car(model, producer, date_of_release, maximum_speed,engine_capacity) {
//     this.model = model;
//         this.producer = producer;
//         this.date_of_release = date_of_release;
//         this.maximum_speed = maximum_speed;
//         this.engine_capacity = engine_capacity;
// }
//
// let newCar = new Car('Big', 'Jeep', '21.12.1995', '375 km/h', '50 l');
// console.log(newCar);
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
// Car.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maximum_speed} на годину`)
// }
// newCar.drive()
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
// Car.prototype.info = function () {
//     console.log(
//         `
//             Model - ${this.model}
//             Producer - ${this.producer}
//             Date of release - ${this.date_of_release}
//             Maximum speed - ${this.maximum_speed}
//             Engine capacity - ${this.engine_capacity}
//         `
//     )
// }
// newCar.info()
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// Car.prototype.increaseMaxSpeed =function (newSpeed) {
//     return this.maximum_speed = newSpeed;
// }
// newCar.increaseMaxSpeed('10 km/h');
// console.log(newCar);
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
// Car.prototype.changeYear =function (newValue) {
//     return this.date_of_release = newValue;
// }
// newCar.changeYear('10.06.1957');
// console.log(newCar);
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// Car.prototype.addDriver =function (driver) {
//     return this.driver = driver;
// }
// newCar.addDriver({});
// console.log(newCar);
//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// class SuperCar {
//     constructor(model, producer, date_of_release, maximum_speed, engine_capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.date_of_release = date_of_release;
//         this.maximum_speed = maximum_speed;
//         this.engine_capacity = engine_capacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maximum_speed} на годину`)
//     }
//
//     info() {
//         console.log(
//             `Model - ${this.model}
//             Producer - ${this.producer}
//             Date of release - ${this.date_of_release}
//             Maximum speed - ${this.maximum_speed}
//             Engine capacity - ${this.engine_capacity}`
//         )
//     }
//     increaseMaxSpeed (newSpeed) {
//         return this.maximum_speed = newSpeed;
//     }
//     changeYear (newValue) {
//         return this.date_of_release = newValue;
//     }
//     addDriver (driver) {
//         return this.driver = driver;
//     }
//
// }
//
// let modernCar = new SuperCar('RT200','Cars','24.11.2015','40 k/h','100 l')
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
// modernCar.drive()
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
// modernCar.info()
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
// modernCar.increaseMaxSpeed('50 k/h');
// console.log(modernCar);
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
// modernCar.changeYear('23.01.1900');
// console.log(modernCar);
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// modernCar.addDriver({['name']: 'Q', ['age']: 37});
// console.log(modernCar);
//
// //
// //
// //
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, foot_size) {
    this.name = name;
    this.age = age;
    this.foot_size = foot_size;
}

let girls = [
    new Cinderella('Alice', 19, 45),
    new Cinderella('Dora', 56, 40),
    new Cinderella('Sarah', 45, 30),
    new Cinderella('Slime', 34, 48),
    new Cinderella('Peach', 79, 37),
    new Cinderella('Bella', 36, 36),
    new Cinderella('Rita', 67, 39),
    new Cinderella('Nooda', 16, 41),
    new Cinderella('Ere', 25, 40),
    new Cinderella('Nora', 51, 42)

];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, boot_size) {
        this.name = name;
        this.age = age;
        this.boot_size = boot_size;
    }
}

let prince = new Prince('Edward', 157, 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const girl of girls) {
    if (girl.foot_size===prince.boot_size){
        console.log(girl);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let exactGirl = girls.find((obj) => obj['foot_size']===prince.boot_size)

console.log(exactGirl);