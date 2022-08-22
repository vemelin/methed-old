'use strict'

const currencyConverter = (input) => {
    let amount = input;
    if (!Number.isNaN(amount) && amount > 0) {
        const rub = 73, usd = 1.2,
            eur = rub * usd,
            sum = amount * eur;
        return console.log(`Вы получите: ${sum}₽`);
    }
    else {
        console.log('Вам требуется ввести сумму');
    }
};

currencyConverter(400);