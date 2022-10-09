'use strict';

const title = '    hellooooooooooooooooooooo   ';

function getSomething(str) {
    if (typeof str === 'string') {
        const res1 = str.trim();
        if (str.length > 30) {
            const res2 = str.substring(0, 30) + '...';
            return res2;
        }
        return res1;
    } else {
        return 'it is not string';
    }

}

console.log(getSomething(title));

