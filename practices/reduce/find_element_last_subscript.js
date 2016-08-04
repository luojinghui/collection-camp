'use strict';

function calculate_elements_sum(collection, element) {
    //在这里写入代码
    var index = 0;
    var _ = require('../lodash/mylodash.js');

    _.foreach(collection,function(n,i) {
        if(n === element) {
            index = i;
        }
    });
    return index;

    // for (var i = collection.length - 1; i >= 0; i--) {
    //     if(element === collection[i]) {
    //         return i;
    //     }
    // }
}

module.exports = calculate_elements_sum;
