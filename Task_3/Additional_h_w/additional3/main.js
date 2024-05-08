//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  2. Вивести за допомогою console.log кожен третій елемен
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

console.log(`=============Task 3.1.1 ================`);
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let empty_array = [];
let number = 2;
for (let i = 0; i < 50; i++) {
    empty_array[i] = number;
    number += 2;
}
console.log(empty_array);
console.log(`=============Task 3.1.2 ================`);
// b. заповнити його 50 непарними числами за допомоги циклу.
empty_array = [];
number = 1;
for (let i = 0; i < 50; i++) {
    empty_array[i] = number;
    number += 2;
}
console.log(empty_array);

console.log(`=============Task 3.1.3 ================`);
// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

empty_array = [];
number = null;
for (let i = 0; i < 20; i++) {
    let random_value = Math.floor(Math.random() * 21);
    number = random_value;
    empty_array[i] = number;

}
console.log(empty_array);

console.log(`=============Task 3.1.4 ================`);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
empty_array = [];
number = null;
for (let i = 0; i < 20; i++) {
    let random_value = Math.floor(Math.random() * (732 - 8)) + 8

    number = random_value;
    empty_array[i] = number;


}
console.log(empty_array);
console.log(`=============Task 3.1.5 ================`);
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < empty_array.length; i += 3) {
    console.log(empty_array[i]);
}

console.log(`=============Task 3.1.6 ================`);
//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < empty_array.length; i += 3) {
    if (empty_array[i] % 2 === 0) {
        console.log(empty_array[i]);
    }
}
console.log(`=============Task 3.1.7 ================`);
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let new_empty_array = []
for (let i = 2; i < empty_array.length; i += 3) {
    if (empty_array[i] % 2 === 0) {
        new_empty_array[length] = empty_array[i]
    }
}
console.log(new_empty_array);
console.log(`=============Task 3.1.8 ================`);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < empty_array.length - 1; i++) {
    if (empty_array[i + 1] % 2 === 0) {
        console.log(empty_array[i]);
    }
}

console.log(`=============Task 3.1.9 ================`);
//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let some_array_numbers = [100, 250, 50, 168, 120, 345, 188];
let average_check = 0;
for (let number of some_array_numbers) {
    average_check += number;
}
console.log(average_check / some_array_numbers.length);


console.log(`=============Task 3.1.10 ================`);
//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
array_10 = [];
number = null;
let array_x5 = []
for (let i = 0; i < 20; i++) {
    let random_value = Math.floor(Math.random() * (732 - 8)) + 8
    number = random_value;
    array_10[i] = number;
    array_x5[i] = number * 5;
}
console.log(array_10);
console.log(array_x5);


console.log(`=============Task 3.1.11 ================`);
//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let some_array_11 = [1, true, 1000, 'yes', '777', 2000];
let new_some_array_11 = [];
let newIndex = 0;
for (let i = 0; i < some_array_11.length; i++) {
    if (typeof some_array_11[i] === 'number') {
        new_some_array_11[newIndex] = some_array_11[i];
        newIndex++;
    }
}
console.log(new_some_array_11);

console.log(`=============Task 3.2.1================`);
//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            let userWithCity = {
                id: user.id,
                name: user.name,
                age: user.age,
                status: user.status,
                address: {
                    user_id: city.user_id,
                    country: city.country,
                    city: city.city
                }
            };
            usersWithCities[usersWithCities.length] = userWithCity;
        }
    }
}

console.log(usersWithCities);

console.log(`=============Task 3.2.2================`);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let some_array_3_2_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let elem of some_array_3_2_2) {
    if (elem % 2 === 0) {
        console.log(elem);
    }
}

console.log(`=============Task 3.2.3================`);
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let some_array_3_2_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let empty_array_3_2_3 = [];
let index_3_2_3 = 0;
for (let elem of some_array_3_2_3) {
    if (elem % 2 === 0) {
        empty_array_3_2_3[index_3_2_3] = elem;
        index_3_2_3++;
    }
}
console.log(empty_array_3_2_3);

console.log(`=============Task 3.2.4================`);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let an_array_of_letters = ['a', 'b', 'c'];
let word = [];
for (let i = 0; i < an_array_of_letters.length; i++) {
    word += an_array_of_letters[i];
}
console.log(word);

console.log(`=============Task 3.2.5================`);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
an_array_of_letters_2 = ['a', 'b', 'c'];
let word_2 = '';
let word_2_count = 0;
while (word_2_count < an_array_of_letters.length) {
    word_2+= an_array_of_letters[word_2_count];
    word_2_count++;
}
console.log(word_2);

console.log(`=============Task 3.2.6================`);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
an_array_of_letters_3 = ['a', 'b', 'c'];
let word_3 = '';
for(let i of an_array_of_letters_3) {
    word_3 += i;
}
console.log(word_3);
