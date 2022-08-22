'use strict'

{
    // // First Version
    // for (let i = 1; i <= 10; i++) {
    //     console.log(`------------------------------`);
    //     for (let y = 1; y <= 10; y++) {
    //         console.log(`${i} ^ ${y} = ${i ** y}`);
    //     }
    // };

    // Second Version (Visual Table)
    const matrixTable = (input) => {
        let result = '';
        for (let i = 1; i <= input; i++) {
            for (let y = 1; y <= input; y++) {
                result += ` ${i ** y}`;
                if (i * y < 10) {
                    result += ' ';
                }
            }
            console.log(result);
            result = '';

        }
    };
    // Enter you value
    matrixTable(5)
}


