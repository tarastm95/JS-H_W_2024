// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// 1.Масиви та об'єкти:
// - 1.1.Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let tenth_array = 'end';
let new_array = ['Taras', 2, 5, 2024, {name: "Vova", age: 20}, [1, 2, 3], false, null, undefined, tenth_array];
console.log(new_array[0], new_array[1], new_array[2], new_array[3], new_array[4], new_array[5], new_array[6], new_array[7], new_array[8], new_array[9]);

// - 2.Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book_1 = {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    pageCount: '223',
    genre: 'Young adult fantasy fiction'
}

let book_2 = {
    title: 'Код да Вінчі',
    pageCount: '519',
    genre: 'Містичний детектив'
}

let book_3 = {
    title: 'The Man Who Died Twice',
    pageCount: '448',
    genre: 'Comedy'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book_1_with_authors_name = {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    pageCount: '223',
    genre: 'Young adult fantasy fiction',
    authors: [{name: 'J. K. Rowling', age: '58'}]
}

let book_2_with_authors_name = {
    title: 'Код да Вінчі',
    pageCount: '519',
    genre: 'Містичний детектив',
    authors: [{name: 'Ден Браун', age: '59'}]
}

let book_3_with_authors_name = {
    title: 'The Man Who Died Twice',
    pageCount: '448',
    genre: 'Comedy',
    authors: [{name: 'Richard Osman', age: '53'}]
}

// - 4.Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let company_users = [{name: 'Taras', username: 'taras2000', password: 'qwerda!'},
    {name: 'Ivan', username: 'ivan2001', password: 'cxzcxzc!!'},
    {name: 'Ostap', username: 'ostap2002', password: 'wqewqedas!'},
    {name: 'Oleg', username: 'oleg2003', password: 'cccczxcxz!!'},
    {name: 'Diana', username: 'diana2004', password: 'fsdfdsfad!'},
    {name: 'Olena', username: 'olena2005', password: 'czvxcvcxvcx!'},
    {name: 'Dasha', username: 'dasha2006', password: 'dasdsadas!!!!'},
    {name: 'John', username: 'john2007', password: 'jhgjhgjhgj!'},
    {name: 'Mykola', username: 'mykola2008', password: 'fdsfvxcvxc!'},
    {name: 'David', username: 'david2009', password: 'werwerewr!'}
];

console.log(company_users[0].password);
console.log(company_users[1].password);
console.log(company_users[2].password);
console.log(company_users[3].password);
console.log(company_users[4].password);
console.log(company_users[5].password);
console.log(company_users[6].password);
console.log(company_users[7].password);
console.log(company_users[8].password);
console.log(company_users[9].password);

// 5.-- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
// 5.1 - Перший варіант масив об'єктів:
let temperature1 = [{
    name_of_the_day: 'Понеділок',
    temperature_in_the_morning: '10ºC',
    temperature_per_day: '20ºC',
    temperature_in_the_evening: '15ºC'
},
    {
        name_of_the_day: 'Вівторок',
        temperature_in_the_morning: '9ºC',
        temperature_per_day: '18ºC',
        temperature_in_the_evening: '15ºC'
    },
    {
        name_of_the_day: 'Середа',
        temperature_in_the_morning: '12ºC',
        temperature_per_day: '23ºC',
        temperature_in_the_evening: '16ºC'
    },
    {
        name_of_the_day: 'Четвер',
        temperature_in_the_morning: '11ºC',
        temperature_per_day: '19ºC',
        temperature_in_the_evening: '14ºC'
    },
    {
        name_of_the_day: 'П\'ятниця',
        temperature_in_the_morning: '8ºC',
        temperature_per_day: '16ºC',
        temperature_in_the_evening: '13ºC'
    },
    {
        name_of_the_day: 'Субота',
        temperature_in_the_morning: '7ºC',
        temperature_per_day: '17ºC',
        temperature_in_the_evening: '12ºC'
    },
    {
        name_of_the_day: 'Неділя',
        temperature_in_the_morning: '9ºC',
        temperature_per_day: '18ºC',
        temperature_in_the_evening: '14ºC'
    },
]

// 5.1 - Другий варіант - масив з масивів з обєктами:
let temperature2 = [
    [{
        name_of_the_day: 'Понеділок',
        temperature_in_the_morning: '10ºC',
        temperature_per_day: '20ºC',
        temperature_in_the_evening: '15ºC'
    }],
    [{
        name_of_the_day: 'Вівторок',
        temperature_in_the_morning: '9ºC',
        temperature_per_day: '18ºC',
        temperature_in_the_evening: '15ºC'
    }],
    [{
        name_of_the_day: 'Середа',
        temperature_in_the_morning: '12ºC',
        temperature_per_day: '23ºC',
        temperature_in_the_evening: '16ºC'
    }],
    [{
        name_of_the_day: 'Четвер',
        temperature_in_the_morning: '11ºC',
        temperature_per_day: '19ºC',
        temperature_in_the_evening: '14ºC'
    }],
    [{
        name_of_the_day: 'П\'ятниця',
        temperature_in_the_morning: '8ºC',
        temperature_per_day: '16ºC',
        temperature_in_the_evening: '13ºC'
    }],
    [{
        name_of_the_day: 'Субота',
        temperature_in_the_morning: '7ºC',
        temperature_per_day: '17ºC',
        temperature_in_the_evening: '12ºC'
    }],
    [{
        name_of_the_day: 'Неділя',
        temperature_in_the_morning: '9ºC',
        temperature_per_day: '18ºC',
        temperature_in_the_evening: '14ºC'
    }]
];

// 6.Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 100;

if (x !== 0) {
    console.log('x = 100: Вірно');
} else {
    console.log('x = 1: Невірно');
}

// Перевірка для x = 1
x = 1;

if (x !== 0) {
    console.log('x = 1: Вірно');
} else {
    console.log('x = 1: Невірно');
}

// Перевірка для x = 0
x = 0;

if (x !== 0) {
    console.log('x = 0: Вірно');
} else {
    console.log('x = 0: Невірно');
}

// Перевірка для x = -3
x = -3;

if (x !== 0) {
    console.log('x = -3: Вірно');
} else {
    console.log('x = -3: Невірно');
}

// - 7.Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 20;

if (time >= 0 && time <= 15) {
    console.log('Перша чверть');
} else if (time > 15 && time <= 30) {
    console.log('Друга чверть');
} else if (time > 30 && time <= 45) {
    console.log('Третя чверть');
} else if (time > 45 && time <= 59) {
    console.log('Четверта чверть');
} else {
    console.log('Помилкове значення');
}

// 8.- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 29;

if (day > 0 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада місяця');
} else {
    console.log('Неправильне значення дня');
}

// 9.- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let current_day_prompt = prompt('Введіть порядковий номер дня тижня');
let current_day;
switch (current_day_prompt) {
    case '1':
        current_day = "Sunday";
        break;
    case '2':
        current_day = "Monday";
        break;
    case '3':
        current_day = "Tuesday";
        break;
    case '4':
        current_day = "Wednesday";
        break;
    case '5':
        current_day = "Thursday";
        break;
    case '6':
        current_day = "Friday";
        break;
    case '7':
        current_day = "Saturday";
        break;
    default:
        current_day = "Невірний день";
        break;
}

console.log(current_day);

//   10.  - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let current_number_1 = prompt('Введіть перше число:');
let current_number_2 = prompt('Введіть друге число:');
let max_number;
if (current_number_1 > current_number_2) {
    max_number = current_number_1;
    console.log(`Максимальне число ${max_number}`);
} else if (current_number_2 > current_number_1) {
    max_number = current_number_2;
    console.log(`Максимальне число ${max_number}`);
} else {
    console.log('Числа рівні');
}

// 11.- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let some_x = prompt('Введіть будь-яке значення:');
some_x = some_x ? some_x : "default";
console.log(some_x);

// 12.    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`Супер! Назва курсу ${coursesAndDurationArray[0].title}`);
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`Супер! Назва курсу ${coursesAndDurationArray[1].title}`);
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`Супер! Назва курсу ${coursesAndDurationArray[2].title}`);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`Супер! Назва курсу ${coursesAndDurationArray[3].title}`);
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`Супер! Назва курсу ${coursesAndDurationArray[4].title}`);
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`Супер! Назва курсу ${coursesAndDurationArray[5].title}`);
}


