//1.1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(new User(1, "Taras", "Tarasenko", "taras@gmail.com", "380937499167"));
users.push(new User(2, "Oleg", "Olegenko", "oleg@gmail.com", "380937499168"));
users.push(new User(3, "Vova", "Ostapenko", "vova@gmail.com", "380937499169"));
users.push(new User(4, "Dana", "Davudenko", "dana@gmail.com", "380937499151"));
users.push(new User(5, "Diana", "Kushnir", "diana@gmail.com", "380937499152"));
users.push(new User(6, "Max", "Pyndor", "max@gmail.com", "380937499153"));
users.push(new User(7, "David", "Ivannok", "david@gmail.com", "380937499154"));
users.push(new User(8, "Yana", "Iban", "yana@gmail.com", "380937499155"));
users.push(new User(9, "Denis", "Tsar", "denis@gmail.com", "380937499156"));
users.push(new User(10, "Nastya", "Romanets", "nastya@gmail.com", "380937499157"));

console.log(users);

//1.2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsers = users.filter(user => user.id % 2 === 0);

console.log(filteredUsers);

//1.3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let filteredUsersBySort = users.sort((a, b) => a.id - b.id);
console.log(filteredUsersBySort);

//1.4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order; // поле order є масивом зі списком товарів
    }
}


let clients = [];

clients.push(new Client(1, "Taras", "Tarasenko", "taras@gmail.com", "380937499167", ["tovar", "tovar"]));
clients.push(new Client(2, "Oleg", "Olegenko", "oleg@gmail.com", "380937499168", ["tovar"]));
clients.push(new Client(3, "Vova", "Ostapenko", "vova@gmail.com", "380937499169", ["tovar", "tovar", "tovar"]));
clients.push(new Client(4, "Dana", "Davudenko", "dana@gmail.com", "380937499151", ["tovar", "tovar", "tovar", "tovar", "tovar", "tovar"]));
clients.push(new Client(5, "Diana", "Kushnir", "diana@gmail.com", "380937499152", ["tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar"]));
clients.push(new Client(6, "Max", "Pyndor", "max@gmail.com", "380937499153", ["tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar"]));
clients.push(new Client(7, "David", "Ivannok", "david@gmail.com", "380937499154", ["tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar"]));
clients.push(new Client(8, "Yana", "Iban", "yana@gmail.com", "380937499155", ["tovar"]));
clients.push(new Client(9, "Denis", "Tsar", "denis@gmail.com", "380937499156", ["tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar", "tovar"]));
clients.push(new Client(10, "Nastya", "Romanets", "nastya@gmail.com", "380937499157", ["tovar"]));

console.log(clients);

//1.5 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((a, b) => a.order.length - b.order.length);

console.log(clients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, EngineСapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.EngineСapacity = EngineСapacity;
    this.driver = null;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
        console.log(`модель: ${this.model}`);
        console.log(`виробник: ${this.producer}`);
        console.log(`рік випуску: ${this.year}`);
        console.log(`максимальна швидкість: ${this.maxSpeed}`);
        console.log(`об'єм двигуна: ${this.EngineСapacity}`);
        if (this.driver) {
            console.log(`водій: ${JSON.stringify(this.driver)}`);
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let myCar = new Car('X5', 'BMW', 2010, 220, 70);

myCar.drive();
myCar.info();

myCar.increaseMaxSpeed(25);
console.log(`Нова максимальна швидкість: ${myCar.maxSpeed}`);

myCar.changeYear(2015);
console.log(`Новий рік випуску: ${myCar.year}`);

myCar.addDriver({name: 'Oleg', age: 40});
myCar.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log(`======================byClass==========================`)

class Car2 {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = null;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`модель: ${this.model}`);
        console.log(`виробник: ${this.producer}`);
        console.log(`рік випуску: ${this.year}`);
        console.log(`максимальна швидкість: ${this.maxSpeed}`);
        console.log(`об'єм двигуна: ${this.engineCapacity}`);
        if (this.driver) {
            console.log(`водій: ${JSON.stringify(this.driver)}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let myCar2 = new Car('X5', 'BMW', 2010, 220, 70);

myCar2.drive();
myCar2.info();

myCar2.increaseMaxSpeed(25);
console.log(`Нова максимальна швидкість: ${myCar.maxSpeed}`);

myCar2.changeYear(2015);
console.log(`Новий рік випуску: ${myCar.year}`);

myCar2.addDriver({name: 'Oleg', age: 40});
myCar2.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// Клас попелюшка
class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

// Масив попелюшок
let cinderellas = [
    new Cinderella('Anna', 20, 35),
    new Cinderella('Olena', 22, 36),
    new Cinderella('Dana', 25, 37),
    new Cinderella('Nastya', 21, 38),
    new Cinderella('Darina', 23, 39),
    new Cinderella('Mia', 24, 40),
    new Cinderella('Olya', 26, 41),
    new Cinderella('Nika', 27, 42),
    new Cinderella('Veronika', 28, 43),
    new Cinderella('Lucy', 29, 44)
];

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }

    findCinderella(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.shoeSize === this.foundShoe) {
                console.log(`${this.name} знайшов свою попелюшку: ${cinderella.name}`);
                return cinderella;
            }
        }
        console.log(`${this.name} не знайшов свою попелюшку`);
        return null;
    }
}

let prince = new Prince('Petro', 30, 40);

let foundCinderella = prince.findCinderella(cinderellas);

let foundCinderellaWithFind = cinderellas.find(cinderella => cinderella.shoeSize === prince.foundShoe);

console.log(foundCinderella);
console.log(foundCinderellaWithFind);

// Через Array.prototype. створити власний foreach, filter, map;

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function(callback) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

Array.prototype.myMap = function(callback) {
    let mappedArray = [];
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(callback(this[i], i, this));
    }
    return mappedArray;
};

let numbers = [1, 2, 3, 4, 5];

numbers.myForEach(num => console.log(num * 2));

let evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log(evenNumbers);

let doubledNumbers = numbers.myMap(num => num * 2);
console.log(doubledNumbers);
