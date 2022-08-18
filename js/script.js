'use strict'

const productName = 'iPhone',
    productNumber = 200,
    productType = ['iPhone 13 Pro', 'iPhone 13', 'Phone SE', 'iPhone 12', 'iPhone'],
    productPrice = 999;

let summary = productNumber * productPrice;

{
    const name = 'iPhone 13 Pro';
    const count = 5;
    const category = 'mobile phone';
    const price = 999;

    console.log(name);
    console.log(`общая сумма товара: ${count * price}`);
}