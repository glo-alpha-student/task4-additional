'use strict';

const title = '              hellooooooooooooooooooooooooooooooooooooooooo   ';
/*
function getSomething(str) {
    if (typeof str !== 'string') {
        return "not string";
    } else {
        let trimed = str.trim();
        if (trimed.length > 30) {
            trimed.slice(0, 30);
            return trimed;
        }
    }
}




str.trim();
let res=
*/

function getSomething(str) {
    if (typeof str === 'string') {
        let trimmed = str.trim();
        if (trimmed.length > 30) {
            return trimmed.substring(0, 30) + '...';
        }
        return trimmed;
    } else {
        return 'it is not string';
    }

}
console.log(getSomething(title));