// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// ==========================
// (який лежить в папці 2023 plan)
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================
// (який лежить в папці 2023 plan)
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
// //


// Task 1:
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//

function task1() {
    let newDiv = document.createElement('div');
    newDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
    newDiv.style.backgroundColor = 'red';
    newDiv.style.color = 'white';
    newDiv.style.fontSize = '20px';
    newDiv.textContent = 'Блок DIV';
    document.body.appendChild(newDiv);
    let newElement = newDiv.cloneNode(true);
    document.body.appendChild(newElement);
}

task1();

// Task 2:
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

function task2() {
    let newArray = ['Main', 'Products', 'About us', 'Contacts'];

    let newUl = document.createElement('ul');
    document.body.appendChild(newUl);
    for (let elem of newArray) {
        let newLi = document.createElement('li');
        newLi.textContent = elem;
        newUl.appendChild(newLi);
    }
}

task2();

// Task 3:
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

function task3() {
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];


    for (let elem of coursesAndDurationArray) {
        let newDiv = document.createElement('div');
        newDiv.textContent = `title: ${elem.title}  monthDuration: ${elem.monthDuration}`;
        document.body.appendChild(newDiv);
    }
}

task3();

// Task 4:
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// ==========================

function task4() {
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    for (let elem of coursesAndDurationArray) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        let newH = document.createElement('h1');
        let newT = document.createElement('p');
        newH.classList.add('heading');
        newT.classList.add('description');
        newH.textContent = `title: ${elem.title}`;
        newT.textContent = `monthDuration: ${elem.monthDuration}`;
        document.body.appendChild(newDiv);
        newDiv.appendChild(newH);
        newDiv.appendChild(newT);
    }
}

task4();

// Task 5:
// ==========================
// (який лежить в папці 2023 plan)
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================

function task5() {

    let simpsons = [
        {
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
            photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            name: 'Lisa',
            surname: 'Simpson',
            age: 9,
            info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
    ];

    for (let elem of simpsons) {
        let newDiv = document.createElement('div');
        let newP = document.createElement('p');
        let newH = document.createElement('h1');
        let newS = document.createElement('span');
        let photoImg = document.createElement('img');
        document.body.appendChild(newDiv);
        newDiv.appendChild(newH);
        newDiv.appendChild(newS);
        newDiv.appendChild(newP);
        newDiv.appendChild(photoImg);
        newDiv.classList.add('number');
        newH.textContent = `Name: ${elem.name} Surname: ${elem.surname}`
        newS.textContent = `Age: ${elem.age}`
        newP.textContent = `${elem.info}`;
        photoImg.src = elem.photo;
        photoImg.alt = elem.name;
        newDiv.style.border = '1px solid red';
        newDiv.style.margin = '10px';
        newDiv.style.padding = '20px';
        photoImg.style.width = '100px';
    }

}

task5();

// Task 6:
// =========================
// (який лежить в папці 2023 plan)
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
// //
function task6() {
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

    let containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    for (let elem of coursesArray) {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('block');
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.innerHTML = `<h1>${elem.title}</h1>`;
        mainDiv.appendChild(titleDiv);
        let durationDiv = document.createElement('div');
        durationDiv.classList.add('duration');
        durationDiv.innerHTML = `
            <span class="monthDuration">${elem.monthDuration}</span>
            <span class="hourDuration">${elem.hourDuration}</span>
        `;
        mainDiv.appendChild(durationDiv);

        let modulesDiv = document.createElement('div');
        modulesDiv.classList.add('modules');
        let modulesList = document.createElement('ul');
        for (let module of elem.modules) {
            let moduleItem = document.createElement('li');
            moduleItem.textContent = module;
            modulesList.appendChild(moduleItem);
        }
        modulesDiv.appendChild(modulesList);
        mainDiv.appendChild(modulesDiv);
        containerDiv.appendChild(mainDiv);
    }

    document.body.appendChild(containerDiv);
}

task6();


function task7() {
    //Цей код потрібно вставити в консоль:
    // Получаємо всі mp3 файли з сайту (для цього вводимо в консолі):
// 1. let allAudio = document.querySelectorAll('audio');
// 2. let arr1 = [...allAudio] Перетворюємо на масив
// 3. let arrayWithAudio  = [];
// 4. arr1.forEach(el=>{arrayWithAudio.push(el.src)});
// 5. console.log(arrayWithAudio) Виведе масив з піснями mp3;

    //Цей код потрібно вставити в консоль:
//  .item-grid-card__title
// 1. let allTitle = document.querySelectorAll('.item-grid-card__title');
// 2. let arr2 = [...allTitle];
// 3. let arrayWithTitle = [];
// 4. arr2.forEach(el=>{arrayWithTitle.push(el.innerText)});
// 5. console.log(arrayWithTitle) Виведе масив з title mp3;


    //Цей код потрібно вставити в консоль:
// .item-grid-music-preview__author
// 1. let allPreview = document.querySelectorAll('.item-grid-music-preview__author');
// 2. let arr3 = [...allPreview];
// 3. let arrayWithPreview = [];
// 4. arr3.forEach(el=>{arrayWithPreview.push(el.innerText)});
// 5. console.log(arrayWithPreview) Виведе масив з назвою автора mp3;

    // Тепер обєднюємо наші три масиви:
    // let combinedArray = arrayWithAudio.map((value, index) => {
    //         return {
    //             audio: value,
    //             title: arrayWithTitle[index],
    //             authors: arrayWithPreview[index]
    //         }
    //     });
    //
    //     console.log(combinedArray);

    //Обєднаний код, який потрібно вставити в консоль:
    //let allAudio = document.querySelectorAll('audio');  let arr1 = [...allAudio]; let arrayWithAudio  = [];  arr1.forEach(el=>{arrayWithAudio.push(el.src)}); let allTitle = document.querySelectorAll('.item-grid-card__title'); let arr2 = [...allTitle]; let arrayWithTitle = []; arr2.forEach(el=>{arrayWithTitle.push(el.innerText)}); let allPreview = document.querySelectorAll('.item-grid-music-preview__author'); let arr3 = [...allPreview]; let arrayWithPreview = []; arr3.forEach(el=>{arrayWithPreview.push(el.innerText)}); let combinedArray = arrayWithAudio.map((value, index) => {
    //         return {
    //             audio: value,
    //             title: arrayWithTitle[index],
    //             authors: arrayWithPreview[index]
    //         }
    //     });
    //
    //     console.log(combinedArray);


    let arrayWithAudio = [
        "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-sun-and-his-daughter-580.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-raising-me-higher-34.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-life-is-a-dream-837.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-dance-with-me-3.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-complicated-281.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-cat-walk-371.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-cbpd-400.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-silent-descent-614.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-feeling-happy-5.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-valley-sunset-127.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-playground-fun-12.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-pop-05-695.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-comical-2.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-island-beat-250.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-piano-reflections-22.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-bridge-n-98-621.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-summer-fun-13.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-just-chill-16.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-getting-ready-46.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-spirit-in-the-woods-139.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-motivating-mornings-33.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-sports-highlights-51.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-piano-horror-671.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-deep-meditation-109.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-epical-drums-01-676.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-delightful-4.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-fun-times-7.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-slow-trail-71.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-just-kidding-11.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-night-sky-hip-hop-970.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-kodama-night-town-114.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-uplift-me-35.mp3",
        "https://assets.mixkit.co/music/preview/mixkit-hollidays-690.mp3"
    ]

    let arrayWithTitle = [
        "Tech House vibes",
        "Hazy After Hours",
        "Hip Hop 02",
        "A Very Happy Christmas",
        "Sun and His Daughter",
        "Driving Ambition",
        "Raising Me Higher",
        "Life is a Dream",
        "Deep Urban",
        "Serene View",
        "Dance with Me",
        "Complicated",
        "Cat Walk",
        "C.B.P.D",
        "Dreaming Big",
        "Games Worldbeat",
        "Silent Descent",
        "Beautiful Dream",
        "Feeling Happy",
        "Valley Sunset",
        "Playground Fun",
        "Pop 05",
        "Comical",
        "Island Beat",
        "Piano Reflections",
        "BRIDGE N° 98",
        "Summer Fun",
        "Just Chill",
        "Getting Ready",
        "Relaxing in Nature",
        "Spirit in the Woods",
        "Motivating Mornings",
        "Sports Highlights",
        "Sleepy Cat",
        "Piano Horror",
        "Deep Meditation",
        "Epical Drums 01",
        "Delightful",
        "Fun Times",
        "Slow Trail",
        "Just Kidding",
        "Forest Treasure",
        "Night Sky Hip Hop",
        "Kodama Night Town",
        "Uplift Me",
        "Hollidays"
    ]

    let arrayWithPreview = [
        "by Alejandro Magaña (A. M.)",
        "by Alejandro Magaña (A. M.)",
        "by Lily J",
        "by Michael Ramir C.",
        "by Eugenio Mininni",
        "by Ahjay Stelino",
        "by Ahjay Stelino",
        "by Michael Ramir C.",
        "by Eugenio Mininni",
        "by Arulo",
        "by Ahjay Stelino",
        "by Arulo",
        "by Arulo",
        "by Arulo",
        "by Ahjay Stelino",
        "by Bernardo R.",
        "by Eugenio Mininni",
        "by Diego Nava",
        "by Ahjay Stelino",
        "by Alejandro Magaña (A. M.)",
        "by Ahjay Stelino",
        "by Grigoriy Nuzhny",
        "by Ahjay Stelino",
        "by Arulo",
        "by Ahjay Stelino",
        "by Eugenio Mininni",
        "by Ahjay Stelino",
        "by Ahjay Stelino",
        "by Ahjay Stelino",
        "by Diego Nava",
        "by Alejandro Magaña (A. M.)",
        "by Ahjay Stelino",
        "by Ahjay Stelino",
        "by Alejandro Magaña (A. M.)",
        "by Francisco Alvear",
        "by Alejandro Magaña (A. M.)",
        "by Grigoriy Nuzhny",
        "by Ahjay Stelino",
        "by Ahjay Stelino",
        "by Ahjay Stelino",
        "by Ahjay Stelino",
        "by Alejandro Magaña (A. M.)",
        "by Michael Ramir C.",
        "by Alejandro Magaña (A. M.)",
        "by Ahjay Stelino",
        "by Grigoriy Nuzhny"
    ]

    let combinedArray = arrayWithAudio.map((value, index) => {
        return {
            audio: value,
            title: arrayWithTitle[index],
            authors: arrayWithPreview[index]
        }
    });

    console.log(combinedArray);

    let mainDiv = document.createElement('div');
    mainDiv.classList.add('main_music');
    for (let elem of combinedArray) {
        let block = document.createElement('div');
        let title = document.createElement('h1');
        let authors = document.createElement('p');
        let mainDiv2 = document.createElement('div');
        mainDiv2.classList.add('block_with_music');
        mainDiv.appendChild(mainDiv2);
        block.classList.add('audio');
        title.classList.add('title_music');
        authors.classList.add('authors_music');
        mainDiv2.appendChild(block);
        mainDiv2.appendChild(title);
        mainDiv2.appendChild(authors);
        block.innerHTML = `<audio controls>
    <source src="${elem.audio}" type="audio/mpeg">
    Ваш браузер не підтримує елемент <code>audio</code>.
</audio>`
        title.innerHTML = `${elem.title}`;
        authors.innerHTML = `${elem.authors}`

    }
    document.body.appendChild(mainDiv);

}

task7();
