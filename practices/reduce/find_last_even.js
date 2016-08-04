'use strict';

function find_last_even(collection) {
    //在这里写入代码
    //for (var i = collection.length - 1; i >= 0; i--) {
    //    if(collection[i] % 2 === 0) {
    ///        return collection[i];
        //}
    //}

    var _ = require('../lodash/mylodash.js');
    var array = _.filter(collection,function(n) {
        return n % 2 === 0;
    })

    return _.reduce(array,function(a,b) {
        return b;
    });
}

module.exports = find_last_even;
