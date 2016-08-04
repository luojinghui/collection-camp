'use strict';

function hybrid_operation(collection) {
    var _ = require('../../lodash/mylodash.js');
    var array = [];

    array = _.map(collection,function(n) {
        return n * 3 + 2;
    });

    return _.reduce(array,function(a,b) {
        return a + b;
    });

    // for (var i = 0; i < collection.length; i++) {
    //     sum += (collection[i] * 3 + 2);
    // }
    //return sum;
}

module.exports = hybrid_operation;
