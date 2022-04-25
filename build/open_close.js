"use strict";
function compare(n1, n2) {
    if (n1 > n2) {
        return 1;
    }
    if (n1 < n2) {
        return -1;
    }
    return 0;
}
function Sort(arrayA) {
    return arrayA.sort(compare);
}
var numericArray = [2, 3, 4, 1, 5, 8, 11];
console.log(Sort(numericArray));
