'use strict'

// const newValue = prompt('введите слово которое нужно переврнуть', '');

const calculate = (totalAmount, cartQuantity, promoCode) => {
    const firstPromoCode = (totalAmount * cartQuantity) * 0.3,
        secondPromoCode = ((totalAmount * cartQuantity) - 30000) * 0.15,
        thirdPromoCode = (totalAmount * cartQuantity) * 0.10;
    switch (true) {
        case cartQuantity >= 10:
            console.log(firstPromoCode);
            break;
        case totalAmount > 30000:
            console.log(secondPromoCode);
            break;
        case promoCode === 'METHED':
            console.log(thirdPromoCode);
            break;
        case promoCode === 'G3H2Z1' && (firstPromoCode + secondPromoCode + thirdPromoCode) > 2000:
            console.log((totalAmount * cartQuantity) - 500);
            break;
        default:
            break;
    }

}

calculate(70000, 5, 'G3H2Z1');