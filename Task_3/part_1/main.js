// Task 1.1 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<div style="display: flex;justify-content: center;"><h1 style="color: red;text-align: center;"> Task 1.1</h1></div>`)

for (let i = 0; i < 10; i++) {
    document.write(`<div style="display: flex; justify-content: center; border:1px solid red; margin: 10px;">
<p>- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині</p>
</div>`)
}

// Task 1.2 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<div style="display: flex;justify-content: center;"><h1 style="color: red;text-align: center;"> Task 1.2</h1></div>`)

for (let i = 0; i < 10; i++) {
    document.write(`<div style="display: flex; justify-content: center; border:1px solid red; margin: 10px;">
<p> <span>${i + 1}</span> - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині</p>
</div>`)
}

//Task 1.3 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<div style="display: flex;justify-content: center;"><h1 style="color: red;text-align: center;"> Task 1.3</h1></div>`)

let index = 0;
while (index < 20) {
    document.write(`<div style="display: flex; justify-content: center; border:1px solid red; margin: 10px;">
<h1> - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.</h1>
</div>`);
    index++;
}

//Task 1.4 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<div style="display: flex;justify-content: center;"><h1 style="color: red;text-align: center;"> Task 1.4</h1></div>`)

let index_2 = 0;
while (index_2 < 20) {
    document.write(`<div style="display: flex; justify-content: center; border:1px solid red; margin: 10px;">
<h1> <span>${index_2 + 1}</span> - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.</h1>
</div>`);
    index_2++;
}

// Task 1.5 - - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

document.write(`<div style="display: flex;justify-content: center;"><h1 style="color: red;text-align: center;"> Task 1.5</h1></div>`);

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');

let item = 0;
while (item < listOfItems.length) {
    document.write(`<li>${listOfItems[item]}</li>`);
    item++;
}

document.write('</ul>');

// Task 1.6 -Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// 			let products = [
// 				{
// 					title: 'milk',
// 					price: 22,
// 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// 				},
// 				{
// 					title: 'juice',
// 					price: 27,
// 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// 				},
// 				{
// 					title: 'tomato',
// 					price: 47,
// 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// 				},
// 				{
// 					title: 'tea',
// 					price: 15,
// 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// 				},
// 			];
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

document.write(`<div style="display: flex;justify-content: center;"><h1 style="color: red;text-align: center;">  Task 1.6</h1></div>`);

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let product of products) {
   document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}. ${product.price}</h3>
        <img style="width: 100px;height: 100px;" src="${product.image}" alt="" class="product-image">
</div>`)
}

document.write(`<div style="display: flex;justify-content: center;"><h1 style="color: red;text-align: center;">  Task 1.7</h1></div>`);
// Task 1.7
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write(`Користувачі зі статусом true:`);
//     - користувачів зі статусом true
for (let user of users) {
    if(user.status) {
       document.write(`<div><span>Ім'я: ${user.name} </span><span>Вік: ${user.age}</span></div>`);
    }
}

document.write(`Користувачі зі статусом false:`);
// - користувачів зі статусом false
for(let user of users) {
    if(!user.status) {
        document.write(`<div><span>Ім'я: ${user.name} </span><span>Вік: ${user.age}</span></div>`);
    }
}

document.write(`Користувачі які старші за 30 років:`);
// - користувачів які старші за 30 років
for(let user of users) {
    if(user.age > 30) {
        document.write(`<div><span>Ім'я: ${user.name} </span><span>Вік: ${user.age}</span></div>`);
    }
}
