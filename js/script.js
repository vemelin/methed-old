'use strict'
{
const name = prompt('Наименование товара?', ''),
  quantity = + prompt('Количество товара?', ''),
  category = prompt('Категория товара?', ''),
  price = + prompt('Цена товара?', '');

if (Number.isNaN(quantity) && Number.isNaN(price)) console.log('Вы ввели некорректные данные');
}