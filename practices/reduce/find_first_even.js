'use strict';

function find_first_even(collection) {
    //在这里写入代码
    // for (var i = 0; i < collection.length; i++) {
    //     if (collection[i] % 2 === 0) {
    //         return collection[i];
    //     }
    // }

    var _ = require('../lodash/mylodash.js');
    var array = _.filter(collection,function(n) {
        return n % 2 === 0;
    })

    return _.reduce(array,function(a,b) {
        return a;
    });
}

module.exports = find_first_even;
