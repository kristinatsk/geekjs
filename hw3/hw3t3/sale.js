"use strict";
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(product => console.log(product.price = product.price - ((product.price*15)/100)));


//Альтернативное решение:
// products.forEach(product => {
//     let sale = product.price - ((product.price*15)/100);
//     product['Цена со скидкой'] = sale;

// });

// console.table(products);