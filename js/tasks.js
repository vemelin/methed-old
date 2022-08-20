'use strict'

{
// Task # 2
const rain = Math.round(Math.random() * 10);
if (rain == 1) console.log('Пошёл дождь. Возьмите зонт!');
if (rain == 0) console.log('Дождя нет!');
}

{
// Task # 3
const qn1 = + prompt('Введите кол-во баллов по математике:', ''),
qn2 = + prompt('Введите кол-во баллов по русскому языку:', ''),
qn3 = + prompt('Введите кол-во баллов по информатике:', '');

let sum = qn1 + qn2 + qn3;
if (sum == 265) console.log('Поздравляю, вы поступили на бюджет!');
}

{
// Task # 4
const getCash = + prompt('Cколько денег вы хотите снять в банкомате?', ''),
denominations = [100, 50, 20, 10, 5, 1];
Number.isNaN(getCash) || getCash < denominations[0] ? console.log(`Банкомат не может выдать такую сумму`) :
console.log(`Закрой рот и забирай свой деньги!`);
console.log(100<100);
}