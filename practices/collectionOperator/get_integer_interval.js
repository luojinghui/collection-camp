
'use strict';
var _ = require('../lodash/mylodash.js');

function get_integer_interval(number_a, number_b) {
    return (range(number_a, number_b));
}

function range(number_a, number_b) {
    var result = [number_a];
    var step = Math.abs(number_b - number_a) / (number_b - number_a);
    var count = Math.abs(number_b - number_a);

    if(step) {
        for(let i = 1; i <= count; i ++) {
            let num = i * step + number_a;
            result.push(num);
        }
    }
    return result;
}
module.exports = get_integer_interval;
