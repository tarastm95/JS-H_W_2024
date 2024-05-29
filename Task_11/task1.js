// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//
// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

//Task1: - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.




function createDoom(data) {
    function createAndAppendElement(parent,elementType, text) {
        let newElement  = document.createElement(elementType);
        newElement .innerText = text;
        parent.appendChild(newElement );
        return newElement;
    }

    data['carts'].forEach(function (cart){
        console.log(cart);
        let cartDiv = document.createElement('div');
        cartDiv.id = 'block';
        document.body.appendChild(cartDiv);
        createAndAppendElement(cartDiv, 'span', `ID: ${cart.id}`);
        createAndAppendElement(cartDiv, 'span', `User ID: ${cart.userId}`);
        createAndAppendElement(cartDiv, 'span', `Total Products: ${cart.totalProducts} `);
        createAndAppendElement(cartDiv, 'span', `Total Quantity: ${cart.totalQuantity}`);
        createAndAppendElement(cartDiv, 'span', `Total Price: $${cart.total}`);
        createAndAppendElement(cartDiv, 'span', `Discounted Total: $${cart.discountedTotal}`);


        cart['products'].forEach(function (product){
            let productDiv = document.createElement('div');
            productDiv.id ='product';
            cartDiv.appendChild(productDiv);

            createAndAppendElement(productDiv, 'span', `Product ID: ${product.id}`);
            createAndAppendElement(productDiv, 'span', `Title: ${product.title}`);
            createAndAppendElement(productDiv, 'span', `Price: $${product.price}`);
            createAndAppendElement(productDiv, 'span', `Quantity: ${product.quantity}`);
            createAndAppendElement(productDiv, 'span', `Total: $${product.total}`);
            createAndAppendElement(productDiv, 'span', `Discount Percentage: ${product.discountPercentage}%`);
            createAndAppendElement(productDiv, 'span', `Discounted Total: $${product.discountedTotal}`);

            let thumbnail = document.createElement('img');
            thumbnail.src = product.thumbnail;
            thumbnail.style.width = '100px'
            productDiv.appendChild(thumbnail);
        })
    })

}

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        createDoom(data);
    })
    .catch(error => console.error('Помилка:', error));

// ==================================================================================================

