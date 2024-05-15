const users = [];
let timerId;

function userCard(number) {
    let nextKey = 1;
    let key = nextKey++;
    let user = {};
    return {
        key: key,
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        name: null,
        id: 0,
        transactionTime: function () {
            const addLeadingZero = (num) => {
                return num < 10 ? '0' + num : num;
            };
            const currentDate = new Date();
            const formattedTime = `${addLeadingZero(currentDate.getDate())}/${addLeadingZero(currentDate.getMonth() + 1)}/${currentDate.getFullYear()}, ${addLeadingZero(currentDate.getHours())}:${addLeadingZero(currentDate.getMinutes())}:${addLeadingZero(currentDate.getSeconds())}`;
            user['formattedTime'] = formattedTime;
        },
        getCardOptions: function () {
            console.log(`${this.key} ${this.balance} ${this.transactionLimit} ${this.historyLogs}`);

        },
        // Ця функція отримує певну кількість грошей і заповнює баланс карти;
        putCredits: function (money) {
            this.balance += money;
            user['credits'] = this.balance;
            const currentTime = this.transactionTime();
            this.historyLogs.push({operationType: 'Received credits', credits: money, operationTime: currentTime});
            console.log(user['credits']);
        },
        // Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти (протилежний за дією від метода putCredits):
        takeCredits: function (money) {
            if (this.transactionLimit <= 0) {
                console.error(`Перевищено ліміт транзакцій`);
                return false;
            } else if (this.balance < 0) {
                console.error(`Недостатньо коштів на картці`);
                return false;
            } else if (this.balance <= money) {
                console.error(`Недостатньо коштів для зняття.Ваш баланс ${this.balance}.Введіть суму менші за ${this.balance}`);
                return false;
            } else {
                this.balance -= money;
                user['credits'] = this.balance;
                console.error(`Знято ${money} грн з карти.`);
                return true;
                const currentTime = this.transactionTime();
                this.historyLogs.push({operationType: 'Withdrawn credits', credits: money, operationTime: currentTime});
        }},
        // Ця функція приймає як аргумент число і встановлює його як ліміт транзакцій на картці
        setTransactionLimit: function (number) {
            this.transactionLimit = number;
            const currentTime = this.transactionTime();
            this.historyLogs.push({operationType: 'Transaction limit change', credits: number, operationTime: currentTime});
        },
        // Ця функція отримує два аргументи - кількість кредитів, які потрібно передати, та карту одержувача
        transferCredits: function (money, recipientCard) {
            const tax = 0.005;
            if (this.transactionLimit <= 0) {
                console.error(`Перевищено ліміт транзакцій`);
            } else if (this.balance < 0) {
                console.error(`Недостатньо коштів на картці`);
            } else if (this.balance <= money) {
                console.error(`Недостатньо коштів для зняття.Ваш баланс ${this.balance}.Введіть суму менші за ${this.balance}`);
            } else {
                const taxedAmount = money * (1 + tax); // Сума з податком
                this.balance -= taxedAmount;
                user['credits'] = this.balance;
                console.log(`Передано ${taxedAmount} грн на карту ${recipientCard}.`);
            }


        },
        getCardByKey: function (number) {
            //return user;
        },
        userNameAndId: function (name) {
            user['name'] = name;
            if (users.length === 1) {
                user['id'] = 1;
            } else {
                user['id'] = users.length + 1;
            }

        },
        pushNewUser: function () {
            users.push(user)
        }

    };
}

function UserAccount(name, cards) {
    this.cards = cards;
    this.addCard = function (card) {
        this.cards.push(card)
    };
    this.getCardByKey = function (number) {
        return this.cards[number - 1];
    };
}


const person1 = new UserAccount('Oleg', ['47890183981234787', '49089098754312345']);
const usersCard = userCard();
usersCard.putCredits(100);// Ця функція отримує певну кількість грошей і заповнює баланс карти
usersCard.setTransactionLimit(1000);// Ця функція приймає як аргумент число і встановлює його як ліміт транзакцій на картці
usersCard.takeCredits(100);//Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти (протилежний за дією від метода putCredits):
usersCard.userNameAndId('Taras');
usersCard.pushNewUser() // Викликається останньою.
// usersCard.transferCredits(20, '46004567893848484'); // Ця функція отримує два аргументи - кількість кредитів, які потрібно передати, та карту одержувача	(інший об’єкт, створений функцією `userCard` - card1):
console.log(usersCard.historyLogs);

