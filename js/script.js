'use strict'

const productName = 'iPhone',
    productNumber = 200,
    productType = ['iPhone 13 Pro', 'iPhone 13', 'Phone SE', 'iPhone 12', 'iPhone'],
    productPrice = 999;

let summary = productNumber * productPrice;

const productObject2 = {
    name: 'iPhone 13 Pro', 
    number: 5,
    type: 'mobile phone',
    price: 999,
};

console.log('Название продукта:' + ' ' + productName);
console.log('Сумма:' + ' ' + summary + '$');

console.log(`Второй товар, с названием ${productObject2.name}, 
возможность приобрести его по следующей цене ${productObject2.price}$, в наличии ${productObject2.number} штук,
все товары можно приобрести за общую сумму ${productObject2.price * productObject2.number}`);