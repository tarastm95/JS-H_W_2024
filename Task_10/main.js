//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

// Task_1: //Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// // ==========================

document.write(`<div><p style="font-size: 40px;color:red;font-weight: bold;">Task 1:</p></div>`);

function task1() {
    let formContainer = document.createElement('div');
    formContainer.innerHTML = `
        <form id="myForm">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" value=""><br>
            <label for="surname">Surname:</label><br>
            <input type="text" id="surname" name="surname" value=""><br>
            <label for="age">Age:</label><br>
            <input type="text" id="age" name="age" value=""><br><br>
            <input type="submit" value="Submit">
        </form>
    `;
    document.body.appendChild(formContainer);

    let form = document.getElementById('myForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let formData = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            age: document.getElementById('age').value
        };

        console.log(formData);
    });
}

task1();

// Task_2: є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
document.write(`<div><p style="font-size: 40px;color:red;font-weight: bold;">Task 2:</p></div>`);

function task2() {
    let number = document.createElement('div');
    number.style.marginTop = '40px';
    number.style.border = '1px solid red';
    number.style.width = '20%';
    number.style.height = '30px';
    number.style.textAlign = 'center';
    number.innerText = '1';
    number.id = 'number';
    document.body.appendChild(number);

    let localStg = localStorage.getItem('number');
    if (localStg === null) {
        localStg = 0;
    } else {
        localStg = parseInt(localStg);
    }
    localStg += 1;
    localStorage.setItem('number', localStg);
    document.getElementById('number').innerText = localStg;
}

task2();

//Task 3: Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
document.write(`<div><p style="font-size: 40px;color:red;font-weight: bold;">Task 3:</p></div>`);

function task3() {
    let now = new Date();
    let formattedDate = now.toLocaleString('uk-UA');
    let sessions = localStorage.getItem('sessions');

    if (sessions === null) {
        sessions = [];
    } else {
        sessions = JSON.parse(sessions);
    }
    sessions.push(formattedDate);

    localStorage.setItem('sessions', JSON.stringify(sessions));
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.style.marginTop = '50px';
    newDiv.innerHTML = `<a href="sessions.html">Go to Sessions Page</a>`;
}

task3()

//Task 4: зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
document.write(`<div><p style="font-size: 40px;color:red;font-weight: bold;">Task 4:</p></div>`);

function task4() {
    let arr = [
        {"id": 0, "name": "Name0", "value": 0},
        {"id": 1, "name": "Name1", "value": 10},
        {"id": 2, "name": "Name2", "value": 20},
        {"id": 3, "name": "Name3", "value": 30},
        {"id": 4, "name": "Name4", "value": 40},
        {"id": 5, "name": "Name5", "value": 50},
        {"id": 6, "name": "Name6", "value": 60},
        {"id": 7, "name": "Name7", "value": 70},
        {"id": 8, "name": "Name8", "value": 80},
        {"id": 9, "name": "Name9", "value": 90},
        {"id": 10, "name": "Name10", "value": 100},
        {"id": 11, "name": "Name11", "value": 110},
        {"id": 12, "name": "Name12", "value": 120},
        {"id": 13, "name": "Name13", "value": 130},
        {"id": 14, "name": "Name14", "value": 140},
        {"id": 15, "name": "Name15", "value": 150},
        {"id": 16, "name": "Name16", "value": 160},
        {"id": 17, "name": "Name17", "value": 170},
        {"id": 18, "name": "Name18", "value": 180},
        {"id": 19, "name": "Name19", "value": 190},
        {"id": 20, "name": "Name20", "value": 200},
        {"id": 21, "name": "Name21", "value": 210},
        {"id": 22, "name": "Name22", "value": 220},
        {"id": 23, "name": "Name23", "value": 230},
        {"id": 24, "name": "Name24", "value": 240},
        {"id": 25, "name": "Name25", "value": 250},
        {"id": 26, "name": "Name26", "value": 260},
        {"id": 27, "name": "Name27", "value": 270},
        {"id": 28, "name": "Name28", "value": 280},
        {"id": 29, "name": "Name29", "value": 290},
        {"id": 30, "name": "Name30", "value": 300},
        {"id": 31, "name": "Name31", "value": 310},
        {"id": 32, "name": "Name32", "value": 320},
        {"id": 33, "name": "Name33", "value": 330},
        {"id": 34, "name": "Name34", "value": 340},
        {"id": 35, "name": "Name35", "value": 350},
        {"id": 36, "name": "Name36", "value": 360},
        {"id": 37, "name": "Name37", "value": 370},
        {"id": 38, "name": "Name38", "value": 380},
        {"id": 39, "name": "Name39", "value": 390},
        {"id": 40, "name": "Name40", "value": 400},
        {"id": 41, "name": "Name41", "value": 410},
        {"id": 42, "name": "Name42", "value": 420},
        {"id": 43, "name": "Name43", "value": 430},
        {"id": 44, "name": "Name44", "value": 440},
        {"id": 45, "name": "Name45", "value": 450},
        {"id": 46, "name": "Name46", "value": 460},
        {"id": 47, "name": "Name47", "value": 470},
        {"id": 48, "name": "Name48", "value": 480},
        {"id": 49, "name": "Name49", "value": 490},
        {"id": 50, "name": "Name50", "value": 500},
        {"id": 51, "name": "Name51", "value": 510},
        {"id": 52, "name": "Name52", "value": 520},
        {"id": 53, "name": "Name53", "value": 530},
        {"id": 54, "name": "Name54", "value": 540},
        {"id": 55, "name": "Name55", "value": 550},
        {"id": 56, "name": "Name56", "value": 560},
        {"id": 57, "name": "Name57", "value": 570},
        {"id": 58, "name": "Name58", "value": 580},
        {"id": 59, "name": "Name59", "value": 590},
        {"id": 60, "name": "Name60", "value": 600},
        {"id": 61, "name": "Name61", "value": 610},
        {"id": 62, "name": "Name62", "value": 620},
        {"id": 63, "name": "Name63", "value": 630},
        {"id": 64, "name": "Name64", "value": 640},
        {"id": 65, "name": "Name65", "value": 650},
        {"id": 66, "name": "Name66", "value": 660},
        {"id": 67, "name": "Name67", "value": 670},
        {"id": 68, "name": "Name68", "value": 680},
        {"id": 69, "name": "Name69", "value": 690},
        {"id": 70, "name": "Name70", "value": 700},
        {"id": 71, "name": "Name71", "value": 710},
        {"id": 72, "name": "Name72", "value": 720},
        {"id": 73, "name": "Name73", "value": 730},
        {"id": 74, "name": "Name74", "value": 740},
        {"id": 75, "name": "Name75", "value": 750},
        {"id": 76, "name": "Name76", "value": 760},
        {"id": 77, "name": "Name77", "value": 770},
        {"id": 78, "name": "Name78", "value": 780},
        {"id": 79, "name": "Name79", "value": 790},
        {"id": 80, "name": "Name80", "value": 800},
        {"id": 81, "name": "Name81", "value": 810},
        {"id": 82, "name": "Name82", "value": 820},
        {"id": 83, "name": "Name83", "value": 830},
        {"id": 84, "name": "Name84", "value": 840},
        {"id": 85, "name": "Name85", "value": 850},
        {"id": 86, "name": "Name86", "value": 860},
        {"id": 87, "name": "Name87", "value": 870},
        {"id": 88, "name": "Name88", "value": 880},
        {"id": 89, "name": "Name89", "value": 890},
        {"id": 90, "name": "Name90", "value": 900},
        {"id": 91, "name": "Name91", "value": 910},
        {"id": 92, "name": "Name92", "value": 920},
        {"id": 93, "name": "Name93", "value": 930},
        {"id": 94, "name": "Name94", "value": 940},
        {"id": 95, "name": "Name95", "value": 950},
        {"id": 96, "name": "Name96", "value": 960},
        {"id": 97, "name": "Name97", "value": 970},
        {"id": 98, "name": "Name98", "value": 980},
        {"id": 99, "name": "Name99", "value": 990}
    ];
    let data = document.createElement('div');
    document.body.appendChild(data);
    let prev = document.createElement('button');
    let next = document.createElement('button');
    prev.id = 'prev';
    next.id = 'next';
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    data.style.border = '1px solid red';
    data.style.height = '20vh';
    data.style.marginTop = '50px';
    newDiv.style.marginTop = '10px';
    prev.innerText = 'prev';
    next.innerText = 'next';
    newDiv.appendChild(prev);
    newDiv.appendChild(next);
    let startIndex = 0;
    let endIndex = 10;
    data.innerText = JSON.stringify(arr.slice(0, 10));
    prev.addEventListener('click', function (e) {
        console.log(typeof startIndex)
        if (startIndex <= 0) {
            // Тут не робити нічого
        } else {
            data.innerText = JSON.stringify(arr.slice(startIndex -= 10, endIndex -= 10));
        }

    });
    next.addEventListener('click', function (e) {
        if (endIndex >= 100) {
            // Тут не робити нічого
        } else {
            data.innerText = JSON.stringify(arr.slice(startIndex += 10, endIndex += 10));
        }

    })

}

task4();

document.write(`<div><p style="font-size: 40px;color:red;font-weight: bold;">Task 5:</p></div>`);

//Task5- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
function task5() {
    let newDiv = document.createElement('div');
    let newBtn = document.createElement('button');
    newBtn.innerText = 'Кнопка';
    newBtn.id = 'btn';
    newBtn.style.marginTop = '20px';
    newDiv.id = 'text';
    document.body.appendChild(newDiv);
    document.body.appendChild(newBtn)
    let elem = document.getElementById('text');
    elem.style.width = '20px';
    elem.style.height = '20px';
    elem.style.border = '10px solid red';
    elem.style.background = 'black';
    newBtn.addEventListener('click', function (e) {
        elem.removeAttribute('id');
        elem.removeAttribute('style');
    })
}

task5();

document.write(`<div><p style="font-size: 40px;color:red;font-weight: bold;">Task 6:</p></div>`);

//Task6 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
function task6() {
    let formContainer = document.createElement('div');
    formContainer.innerHTML = `
        <form id="myForm2">
            <label for="age">Age:</label><br>
            <input type="text" id="age2" name="age" value=""><br><br>
            <input type="submit" value="Submit">
        </form>
    `;
    document.body.appendChild(formContainer);

    let form = document.getElementById('myForm2');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let data = document.getElementById('age2').value;
        let age = parseInt(data);
        if (isNaN(age)) {
            alert('Введіть ваш вік!');
        } else {
            if (age < 18) {
                alert(`Ваш вік: ${age}. Це менше 18 рокам. Доступ заборонено.`);
            } else {
                alert(`Ваш вік: ${age}. Дію підтверджено.`);
            }
        }

        let formData = {
            age: data
        };

        console.log(formData);
    });
}

task6();

document.write(`<div><p style="font-size: 40px;color:red;font-weight: bold;">Task 7:</p></div>`);

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

function task7() {
    let formContainer = document.createElement('div');
    formContainer.innerHTML = `
        <form id="myForm3">
            <label for="name">Рядки:</label><br>
            <input type="number" id="rows" name="rows" value=""><br>
            <label for="surname">Клітинки:</label><br>
            <input type="number" id="cells" name="cells" value=""><br>
            <label for="age">Вміст клітинок:</label><br>
            <input type="text" id="inCells" name="inCells" value=""><br><br>
            <input type="submit" value="Submit">
        </form>
    `;
    document.body.appendChild(formContainer);

    let form = document.getElementById('myForm3');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let rows = document.getElementById('rows').value;
        let cells = document.getElementById('cells').value;
        let inCells = document.getElementById('inCells').value;
        console.log(rows, cells, inCells);

        function createTable(rows, cells, inCells, border) {
            let table = document.createElement('table');
            document.body.appendChild(table);
            table.style.border = border;
            for (let i = 0; i < rows; i++) {
                let row = document.createElement('tr');
                for (let j = 0; j < cells; j++) {
                    let cell = document.createElement('td');
                    cell.style.border = border;
                    cell.textContent = inCells;
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
        }

        createTable(rows, cells, inCells, '1px solid black');

    });
}

task7();

document.write(`<div><p style="font-size: 40px;color:red;font-weight: bold;">Task 8:</p></div>`);
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

function createElements() {
    let priceContainer = document.createElement('div');
    priceContainer.id = 'price-container';
    document.body.appendChild(priceContainer);
    let currentTimeContainer = document.createElement('div');
    currentTimeContainer.id = 'current-time';
    document.body.appendChild(currentTimeContainer);
}

function updatePrice() {
    const priceContainer = document.getElementById('price-container');
    const currentTimeContainer = document.getElementById('current-time');
    let currentPrice = parseInt(localStorage.getItem('price'), 10) || 100;
    let lastUpdateTime = parseInt(localStorage.getItem('lastUpdateTime'), 10) || 0;

    const currentTime = Date.now();
    const tenSeconds = 10000;

    if (currentTime - lastUpdateTime > tenSeconds) {
        currentPrice += 10;
        lastUpdateTime = currentTime;
        localStorage.setItem('price', currentPrice);
        localStorage.setItem('lastUpdateTime', lastUpdateTime);
    }

    priceContainer.innerText = currentPrice + 'грн';
    const now = new Date();
    const currentTimeString = now.toLocaleString();
    currentTimeContainer.innerText = `Current Time: ${currentTimeString}`;
}

window.addEventListener('load', () => {
    createElements();
    updatePrice();
});


