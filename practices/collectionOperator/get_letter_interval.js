'use strict';
var _ = require('../lodash/mylodash.js');

function get_letter_interval(number_a, number_b) {
    // var array = [];
    // var result = [];
    //
    // array = _.range(number_a,number_b);
    //
    // return _.map(array,function(n) {
    //     return (_.num_change_letter(n));
    // });

    return range(number_a, number_b);
}

module.exports = get_letter_interval;

/*
    var array = [];

    if(number_a <= number_b) {
    for(var i=number_a; i<=number_b; i++){
        array.push(String.fromCharCode(i+96));
        }
    }else {
        for(var j=number_a; j>=number_b; j--){
            array.push(String.fromCharCode(j+96));
            }
    }
    return array;
    */

function num_change_letter(num) {
    var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
     "s", "t", "u", "v", "w", "x", "y", "z"];
    var f = (num - 1) % 26;

    return a[f];
}

function range(num1, num2) {
    var step = Math.abs(num2 - num1) / (num2 - num1);
    var count = Math.abs(num2 - num1);
    var result = [];

    if(step) {
        for(let i = 0; i <= count; i ++) {
            var num = i * step + num1;
            result.push(num_change_letter(num));
        }
    } else {
        result.push(num_change_letter(num1));
    }
    return result;
}
