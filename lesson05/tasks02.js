'use strict'

const newValue = 'HeLlo WoRlD'

const modifyString = (input) => {
    let str = input;
    let newStr = str.toLowerCase();
    console.log(newStr[0].toUpperCase() + newStr.substring(1));
}

modifyString(newValue)