'use strict';
var _ = require('lodash');


function choose_multiples_of_three(collection) {

    var result = [];
    var _ = require('../lodash/mylodash.js');

    // for(var i=0; i<collection.length; i++) {
    //     if(collection[i] % 3 === 0 ) {
    //         result.push(collection[i]);
    //     }
    // }
    // return result;

    // return _.filter(collection,function(n) {
    //     return n % 3 === 0;
    // })
    return filter(collection, item => item % 3 === 0);
}

function filter(array, fun) {
    var result = [];

    _.forEach(array, function(item) {
        if(fun(item)) {
            result.push(item);
        }
    })
    return result;
}

module.exports = choose_multiples_of_three;
