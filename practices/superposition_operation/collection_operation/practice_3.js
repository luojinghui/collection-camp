'use strict';
var _ = require('../../lodash/mylodash.js');

function hybrid_operation_to_uneven(collection) {
    // var sum = 0 ;
    // for (var i = 0; i < collection.length; i++) {
    //     if(collection[i] % 2 != 0 ) {
    //         sum += (collection[i] * 3 + 5);
    //     }
    // }
    // return sum;

    var sum = 0;
    var array = _.filter(collection,function(n) {
        return n % 2 != 0;
    });

    var array_odd = _.map(array,function(n) {
        return (n * 3 + 5);
    });
    return _.reduce(array_odd,function(a,b) {
        return a + b ;
    });
}

module.exports = hybrid_operation_to_uneven;
