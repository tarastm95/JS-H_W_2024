// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

console.log(`=============Task 2.1================`);
// Task 2.1 --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

//     - з 5 числових значень
let array_numbers = [1, 2, 3, 4, 5];

// - з 5 стічкових значень
let array_words = ['a', 'b', 'c', 'd', 'e'];

// - з 5 значень стрічкового, числового та булевого типу
let array_mix = ['Hello', 42, true, false, 123];

console.log(`5 числових значень: ${array_numbers}`);
console.log(`5 стічкових значень: ${array_words}`);
console.log(`5 значень стрічкового, числового та булевого типу: ${array_mix}`);

console.log(`=============Task 2.2================`);
//Task 2.2-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let empty_array = [];
empty_array[0] = 'Taras';
empty_array[1] = true;
empty_array[2] = 2024;
empty_array[3] = {
    address: {
        city: 'London',
        country: 'UK'
    }
}
empty_array[4] = [1, 2, 3, 4, 5];
console.log(empty_array);

console.log(`=============Task 2.3================`);
// Task 2.3 - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 2.3.1. перебрати його циклом while
console.log(`=============Task 2.3.1 while================`);
let some_array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let some_array_index = 0;
while (some_array_index < some_array.length) {
    console.log(some_array[some_array_index]);
    some_array_index++;
}

console.log(`=============Task 2.3.2 for================`);
// 2.3.2. перебрати його циклом for
for (let i = 0; i < some_array.length; i++) {
    console.log(some_array[i]);
}

console.log(`=============Task 2.3.3 while  % 2 !== 0 ================`);
// 2.3.3. перебрати циклом while та вивести  числа тільки з непарним індексом
some_array_index = 0; // до початково значення 0

while (some_array_index < some_array.length) {
    if (some_array_index % 2 !== 0) {
        console.log(some_array[some_array_index]);
    }
    some_array_index++;
}

//2.3.4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log(`=============Task 2.3.4. ================`);

for (let i = 0; i < some_array.length; i++) {
    if (i % 2 !== 0) {
        console.log(some_array[i]);
    }
}

console.log(`=============Task 2.3.5. ================`);
//2.3.5. перебрати циклом while та вивести  числа тільки парні  значення
some_array_index = 0;
while (some_array_index < some_array.length) {
    if (some_array[some_array_index] % 2 === 0) {
        console.log(some_array[some_array_index])
    }
    some_array_index++;
}
console.log(`=============Task 2.3.6. ================`);
//2.3.6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < some_array.length; i++) {
    if (some_array[i] % 2 === 0) {
        console.log(some_array[i]);
    }
}
console.log(`=============Task 2.3.7. ================`);
//7. замінити кожне число кратне 3 на слово "okten"
some_array_index = 0;
while (some_array_index < some_array.length) {
    if (some_array[some_array_index] % 3 === 0) {
        some_array[some_array_index] = 'okten';
    }
    some_array_index++;
}
console.log(some_array);

console.log(`=============Task 2.3.8. ================`);
some_array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// вивести масив в зворотньому порядку.
for (let i = some_array.length - 1; i >= 0; i--) {
    console.log(some_array[i]);
}

console.log(`=============Task 2.3.9.1  ================`);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while, але в зворотньому циклі (с заду на перед)
let some_array_reverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

some_array_index = some_array_reverse.length - 1;

while (some_array_index >= 0) {
    console.log(some_array_reverse[some_array_index])
    some_array_index--;
}
console.log(`=============Task 2.3.9.2  ================`);
some_array_reverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
some_array_index = some_array_reverse.length - 1;
//2. перебрати його циклом for, але в зворотньому циклі (с заду на перед)
for (let i = some_array_index; i >= 0; i--) {
    console.log(some_array_reverse[i]);
}

console.log(`=============Task 2.3.9.3  ================`);

//3. перебрати циклом while та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)
some_array_reverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
some_array_index = some_array_reverse.length - 1;

while (some_array_index >= 0) {
    if (some_array_index % 2 !== 0) {
        console.log(some_array_reverse[some_array_index]);
    }
    some_array_index--;
}

console.log(`=============Task 2.3.9.4  ================`);

//2.3.9.4. перебрати циклом for та вивести  числа тільки з непарним індексом, але в зворотньому циклі (с заду на перед)
some_array_reverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
some_array_index = some_array_reverse.length - 1;

for (let i = some_array_index; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(some_array_reverse[i]);
    }
}

console.log(`=============Task 2.3.9.5  ================`);
// 5. перебрати циклом while та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)
some_array_reverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = some_array_reverse.length - 1;
while (i >= 0) {
    if (some_array_reverse[i] % 2 === 0) {
        console.log(some_array_reverse[i]);
    }
    i--;
}

console.log(`=============Task 2.3.9.6  ================`);
//перебрати циклом for та вивести  числа тільки парні  значення, але в зворотньому циклі (с заду на перед)
some_array_reverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = some_array_reverse.length - 1; i >= 0; i--) {
    if (some_array_reverse[i] % 2 === 0) {
        console.log(some_array_reverse[i]);
    }
}

console.log(`=============Task 2.3.9.7  ================`);
//2.3.9.7. замінити кожне число кратне 3 на слово "okten";
some_array_reverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = some_array_reverse.length - 1; i >= 0; i--) {
    if (some_array_reverse[i] % 3 === 0) {
        some_array_reverse[i] = 'okten';
    }
    console.log(some_array_reverse[i]);
}


console.log(`=============Task 2.4================`);
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

console.log(`=============Task 2.4.1================`);
// 2.4.1- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let some_array_2_4_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let value of some_array_2_4_1) {
    console.log(value);
}

console.log(`=============Task 2.4.2================`);
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let some_array_2_4_2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'end', 'Taras', 'new'];

let some_array_2_4_2_i = 0;
while (some_array_2_4_2_i < some_array_2_4_2.length) {
    console.log(some_array_2_4_2[some_array_2_4_2_i]);
    some_array_2_4_2_i++;
}

console.log(`=============Task 2.4.3================`);
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let some_array_2_4_3 = [true, false, 'Taras', 'Lviv', 2024, null, undefined, {name: 'Oleg', age: 23}, [1, 2, 3], 'end'];

let some_array_2_4_3_i = 0;
while (some_array_2_4_3_i < some_array_2_4_3.length) {
    console.log(some_array_2_4_3[some_array_2_4_3_i])
    some_array_2_4_3_i++
}

console.log(`=============Task 2.4.4================`);
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let some_array_2_4_4 = [true, false, 'Taras', 'Lviv', 2024, null, undefined, {name: 'Oleg', age: 23}, [1, 2, 3], 'end'];
for (let i = 0; i < some_array_2_4_4.length; i++) {
    if (typeof some_array_2_4_4[i] === "boolean") {
        console.log(some_array_2_4_4[i]);
    }
}

console.log(`=============Task 2.4.5 ================`);
let some_array_2_4_5 = [true, false, 'Taras', 'Lviv', 2024, null, undefined, {name: 'Oleg', age: 23}, [1, 2, 3], 'end'];
// 2.4.5- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let some_array_2_4_5_i = 0;
while (some_array_2_4_5_i < some_array_2_4_5.length) {
    if (typeof some_array_2_4_5[some_array_2_4_5_i] === 'number') {
        console.log(some_array_2_4_5[some_array_2_4_5_i]);
    }
    some_array_2_4_5_i++
}

console.log(`=============Task 2.4.6 ================`);
//2.4.6 - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let some_array_2_4_6 = [true, false, 'Taras', 'Lviv', 2024, null, undefined, {name: 'Oleg', age: 23}, [1, 2, 3], 'end'];
for (let item_2_4_6 of some_array_2_4_6) {
    if (typeof item_2_4_6 === 'string') {
        console.log(item_2_4_6);
    }
}

console.log(`=============Task 2.5.1 ================`);
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let empty_array_2_5_1 = [];
empty_array_2_5_1[0] = 'Taras';
empty_array_2_5_1[1] = 2024;
empty_array_2_5_1[2] = false;
empty_array_2_5_1[3] = true;
empty_array_2_5_1[4] = null;
empty_array_2_5_1[5] = undefined;
empty_array_2_5_1[6] = {name: 'Oleg', age: 25};
empty_array_2_5_1[7] = [1, 2, 3];
empty_array_2_5_1[8] = 'end';
empty_array_2_5_1[9] = 'new';
empty_array_2_5_1[10] = 10000000000;

for (let item_2_5_1 of empty_array_2_5_1) {
    console.log(item_2_5_1);
}

console.log(`=============Task 2.5.2 ================`);
// 2.5.2 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<div><h1>Task 2.5.2:</h1></div>`);

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`${i}, `);
}

console.log(`=============Task 2.5.3 ================`);
//2.5.3- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

document.write(`<div><h1>Task 2.5.3:</h1></div>`);

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i}, `);
}

console.log(`=============Task 2.5.4 ================`);
//2.5.4- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

document.write(`<div><h1>Task 2.5.4:</h1></div>`);

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`${i}, `);
}

console.log(`=============Task 2.5.5 ================`);
//2.5.5- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

document.write(`<div><h1>Task 2.5.5:</h1></div>`);

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i}, `);
    }

}

console.log(`=============Task 2.5.6 ================`);
//2.5.6- - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

document.write(`<div><h1>Task 2.5.6:</h1></div>`);

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`${i}, `);
    }

}

console.log(`=============Task 2.6.1 ================`);
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
let books = [
    {
        title: "Майстер і Маргарита",
        pageCount: 480,
        authors: ["Михайло Булгаков"],
        genres: ["філософський роман", "фентезі"]
    },
    {
        title: "Таємниці старих будинків",
        pageCount: 352,
        authors: ["Анна Рекун", "Сергій Лоза"],
        genres: ["детектив", "містичний роман", "фентезі"]
    },
    {
        title: "Анна Кареніна",
        pageCount: 864,
        authors: ["Лев Толстой"],
        genres: ["роман"]
    },
    {
        title: "Три товариші",
        pageCount: 544,
        authors: ["Еріх Марія Ремарк"],
        genres: ["роман"]
    },
    {
        title: "Хіба ревуть воли, як ясла повні?",
        pageCount: 256,
        authors: ["Василь Сухомлинський"],
        genres: ["педагогічна література"]
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        pageCount: 336,
        authors: ["Джоан Роулінг"],
        genres: ["фентезі", "пригодницький роман"]
    },
    {
        title: "Забава на одну ніч",
        pageCount: 320,
        authors: ["Євген Гребінка", "Марко Вовчок"],
        genres: ["література для дітей та юнацтва"]
    },
    {
        title: "Зелена миля",
        pageCount: 480,
        authors: ["Стівен Кінг"],
        genres: ["фантастика", "детектив"]
    },
    {
        title: "Пригоди Тома Сойєра",
        pageCount: 304,
        authors: ["Марк Твен"],
        genres: ["пригодницький роман", "дитяча література"]
    },
    {
        title: "Аліса в Країні Чудес",
        pageCount: 272,
        authors: ["Льюїс Керролл"],
        genres: ["фантастичний роман", "дитяча література"]
    }
];

console.log(`=============Task 2.6.2 ================`);
// -знайти наібльшу книжку.

let maxPageCount = 0;
let maxArray = null;

for (let book of books) {
    if (maxPageCount < book.pageCount) {
        maxPageCount = book.pageCount;
        maxArray = book;
    }
}
console.log(maxPageCount);
console.log(maxArray);

console.log(`=============Task 2.6.3 ================`);
// - знайти книжку/ки з найбільшою кількістю жанрів;
let the_largest_genres = 0;
let the_largest_genres_book = null;
for (let book of books) {
    if (book.genres.length >= the_largest_genres) {
        the_largest_genres = book.genres.length;
        the_largest_genres_book = book;
    }
}
console.log(the_largest_genres);
console.log(the_largest_genres_book);

console.log(`=============Task 2.6.4 ================`);
// - знайти книжку/ки з найдовшою назвою

let the_largest_title = '';
let the_largest_title_book = null;
for (let book of books) {
    if (the_largest_title.length < book.title.length) {
        the_largest_title = book.title;
        the_largest_title_book = book;
    }
}
console.log(the_largest_title);
console.log(the_largest_title_book);

console.log(`=============Task 2.6.5 ================`);
//- знайти книжку/ки які писали 2 автори
let number_of_authors = 2;
for (let book of books) {
    if(book.authors.length === number_of_authors) {
        console.log(book)
    }
}
console.log(`=============Task 2.6.6 ================`);
//2.6.6 - знайти книжку/ки які писав 1 автор
let num_of_authors = 1;
for (let book of books) {
    if(book.authors.length === num_of_authors) {
        console.log(book)
    }
}
