// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 4 - створити функцію яка приймає масив та виводить кожен його елемент
// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// 10 - створити функцію яка повертає найменьше число з масиву
// 11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// 13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

console.log(`=========================== Завдання номер 1 =============================`);

// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area_of_the_rectangle(a, b) {
    return a * b;
}

console.log(area_of_the_rectangle(10, 20));

console.log(`=========================== Завдання номер 2 =============================`);

//2 - створити функцію яка обчислює та повертає площу кола з радіусом r
function area_of_a_circle(R) {
    return Math.PI * Math.pow(R, 2);
}

console.log(area_of_a_circle(19));

console.log(`=========================== Завдання номер 3 =============================`);

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area_of_the_cylinder(R, H) {
    let lateral_area = 2 * Math.PI * R * H;
    let top_and_bottom_area = 2 * Math.PI * Math.pow(R, 2);
    return lateral_area + top_and_bottom_area;
}

console.log(area_of_the_cylinder(10, 20));

console.log(`=========================== Завдання номер 4 =============================`);
// 4 - створити функцію яка приймає масив та виводить кожен його елемент
let some_array_4 = [1, 'Taras', true, false, 'end'];

function some_array(some_array_4) {
    for (let i = 0; i < some_array_4.length; i++) {
        console.log(some_array_4[i]);
    }
}

some_array(some_array_4);

console.log(`=========================== Завдання номер 5 =============================`);

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function p_with_text(text) {
    document.write(`<div><p>${text}</p></div>`)
}

console.log('Привіт, світ');

document.write(`=========================== Завдання номер 6 =============================`);

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul_with_text(text) {
    document.write(`</ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }

    document.write(`</ul>`);
}

ul_with_text('Однаковий текст');

document.write(`=========================== Завдання номер 7 =============================`);

// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul_with_text_2(text, elem) {
    document.write(`</ul>`);
    for (let i = 0; i < elem; i++) {
        document.write(`<li>${text}</li>`);
    }

    document.write(`</ul>`);
}

ul_with_text_2('Однаковий текст', 3);

document.write(`=========================== Завдання номер 8 =============================`);
// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список;
let primitive_array = [1, 2, true, false, 'hello', 'end'];

function primitive_list(arr) {
    document.write(`</ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${primitive_array[i]}</li>`);
    }

    document.write(`</ul>`);
}

primitive_list(primitive_array);

document.write(`=========================== Завдання номер 9 =============================`);
// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array_of_objects = [
    {id: 1, name: 'Anna', age: 30},
    {id: 2, name: 'David', age: 25},
    {id: 3, name: 'Nastya', age: 35}
];

function peoples_data(data) {
    for (let i = 0; i < data.length; i++) {
        document.write(`<div> <ul><li>ID: ${data[i]['id']}</li><li>${data[i]['name']}</li><li>${data[i]['age']} y.o</li></ul></div>`);
    }
}

peoples_data(array_of_objects);

console.log(`=========================== Завдання номер 10 =============================`);
// 10 - створити функцію яка повертає найменьше число з масиву;
let some_array_10 = [100, 500000, -18, -100, 200, -400, -22222222];
let s_number = 0;

function the_smallest_number(array) {

    for (let i = 0; i < array.length; i++) {
        if (s_number > array[i]) {
            s_number = array[i];
        }
    }
    return s_number;

}

console.log(the_smallest_number(some_array_10));

console.log(`=========================== Завдання номер 11 =============================`);
//11 -   створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let some_array_11 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

function sum_array(sum) {
    let sum_11 = null;
    for (let i = 0; i < sum.length; i++) {
        sum_11 += sum[i]
    }
    return sum_11;
}

console.log(sum_array(some_array_11));
console.log(`=========================== Завдання номер 12 =============================`);
//12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap_array = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

function swap(arr, elem_1, elem_2) {
   let change = arr[elem_1];
    arr[elem_1] = arr[elem_2];
    arr[elem_2] = change;
   return arr;
}

console.log(swap(swap_array, 1, 0));

console.log(`=========================== Завдання номер 13 =============================`);
// 13 - - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250;

function exchange (sumUAH,currencyValues,exchangeCurrency) {
    if (exchangeCurrency === 'USD') {
        return sumUAH * currencyValues[0].value;
    } else if (exchangeCurrency === 'EUR') {
        return sumUAH * currencyValues[1].value;
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));

console.log(`=========================== THE END =============================`);
