/*Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
const elements=['a', false, 'c', 'd', 4, 'f', 'g', 78, 'i', 'j'];
console.log(elements[0]);
console.log(elements[1]);
console.log(elements[2]);
console.log(elements[3]);
console.log(elements[4]);
console.log(elements[5]);
console.log(elements[6]);
console.log(elements[7]);
console.log(elements[8]);
console.log(elements[9]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1={title: 'Lake poem',
            pageCount: 450,
            genre: 'fantasy'};

let book2={title: 'Kuro no Shoukanshi ',
            pageCount: 700,
            genre: 'LitRPG'};

let book3={title: 'Rage ',
            pageCount: 211,
            genre: 'psychological thriller'};

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let Book1={title: 'Cooking with cannibals',
    pageCount: 800,
    genre: 'cooking',
    authors: ['good boy', 'smelly fish', 'jerk himself']};
Book1.authors[0]={name: 'good boy', age: 10};
Book1.authors[1]={name:'smelly fish', age: 254};
Book1.authors[2]={name:'jerk himself', age: 24};
console.log(Book1);

let Book2={title: 'Horny little pony ',
    pageCount: 120,
    genre: 'fan-fiction',
    authors:[
        {name: 'bad dog', age: 36},
        {name:'Samantha Fox', age: 57}
    ]}
console.log(Book2);

let Book3={title: 'Naughty priestess',
    pageCount: 4500,
    genre: 'erotic drama',
    authors: [
        {name:'goo goo dolls', age: 13},
        {name:'little crunchy', age: 76}
    ]};
Book3.authors[2]={name: 'Holy Cow', age: 84};
console.log(Book3);

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let u6={name:'helen', username:'pussy_lover', password:'4jh56b4'};
let u7={name:'bob', username:'katie', password:'kjln896jn'};
let u8={name:'chuck', username:'GoD_Of_EvErYtHiNg', password:'hj23b5jh3'};
let u9={name:'myroslava', username:'myroslava', password:'j4h5b6j4hb5'};
let users=['u0', 'u1', 'u2',
    {name:'sarah', username:'dominator34', password:'dfg523'},
    {name:'stive', username:'boner', password:'zdzcx6v8z'},
    {name:'john', username:'gluttony', password:'4kj5n6k'},
    u6,u7,u8,u9]
users[0]={name:'frank', username:'pussy_cat', password:123};
users[1]={name:'iryna', username:'Homelander', password:'qwerty123'};
users[2]={name:'stanislav', username:'rem48', password:'4567nkr6jn'};
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
