'use strict';
var _ = require('../../lodash/mylodash.js');

function average_uneven(collection) {
    // var ave = 0;
    // var sum = 0;
    // var count = 0
    //
    // for (var i = 0; i < collection.length; i++) {
    //     if (collection[i] % 2 != 0) {
    //         sum += collection[i];
    //         count ++;
    //     }
    // }
    // ave = sum / count;
    // return ave;

    var even_array = _.filter(collection,function(n) {
        return n % 2 != 0;
    });
    var sum = 0;
    sum = _.reduce(even_array,function(a,b) {
        return a + b;
    });
    return sum / even_array.length;
}

module.exports = average_uneven;
