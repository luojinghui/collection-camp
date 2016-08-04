'use strict';
var _ = require('../../../lodash/mylodash.js');

var calculate_average = function(collection){
    // var sum = 0 ;
    // var count = 0;
    // var ave = 0;
    //
    // for (var i = 0 ; i < collection.length; i++) {
    //     if (collection[i] % 2 === 0) {
    //         sum += collection[i];
    //         count ++;
    //     }
    // }
    // ave = sum / count;
    // return ave;

    var array = _.filter(collection,function(n,i) {
        return i % 2 != 0;
    });

    var sum = _.reduce(array,function(a,b) {
        return a + b;
    });
    return sum / array.length;
};
module.exports = calculate_average;
