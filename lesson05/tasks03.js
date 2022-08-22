'use strict'

const newValue = 'Hello Yeah';

const modifyString = (input) => {
    let str = input;
    console.log(str.split('').reverse().join(''));
}

modifyString(newValue)