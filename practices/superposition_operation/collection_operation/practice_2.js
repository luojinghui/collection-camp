'use strict';
var _ = require('../../lodash/mylodash.js');

function hybrid_operation_to_uneven(collection) {
    // var sum = [] ;
    // for (var i = 0; i < collection.length; i++) {
    //     if(collection[i] % 2 != 0 ) {
    //         sum[sum.length] = (collection[i] * 3 + 2);
    //     }
    // }
    // return sum;

    var array_odd = _.filter(collection,function(n) {
        return (n % 2 != 0);
    });

    var array = _.map(array_odd,function(n) {
        return (n * 3 + 2);
    });
    return array;
}

module.exports = hybrid_operation_to_uneven;
