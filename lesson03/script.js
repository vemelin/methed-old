'use strict'
{
    const name = 'iPhone 13 Pro';
    const count = 5;
    const category = 'mobile phone';
    const price = 999;
    console.log(name);
    console.log(`общая сумма товара: ${count * price}`);
}

{
    const name = prompt('Наименование товара?', ''),
        quantity = + prompt('Количество товара?', ''),
        category = prompt('Категория товара?', ''),
        price = + prompt('Цена товара?', '')
    console.log(`На складе ${quantity} единицы товара "${name}" на сумму ${quantity * price} деревянных`);
}