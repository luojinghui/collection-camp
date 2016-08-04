'use strict';
var $ = require('../../tools/my-lodash.js');
var _ = require('lodash');

// function get_integer_interval_2(number_a, number_b) {
//     var result_box = $.ranges(number_a, number_b);
//
//     result_box = _.filter(result_box, item => item % 2 === 0);
//     return result_box;
// }

function get_integer_interval_2(number_a, number_b) {
    var result = [];
    var step = Math.abs(number_b - number_a) / (number_b - number_a);

    if(step > 0) {
        return _.range(number_a, number_b + 1).filter(item => item % 2 === 0);
    } else {
        return _.range(number_a, number_b - 1).filter(item => item % 2 === 0);
    }
}
module.exports = get_integer_interval_2;
