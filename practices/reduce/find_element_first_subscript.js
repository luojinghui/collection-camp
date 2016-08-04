'use strict';

function calculate_elements_sum(collection, element) {
    //在这里写入代码
    var _ = require('../lodash/mylodash.js');
    var index = -1;
    var exist = true;

    _.foreach(collection,function(n,i) {
        if(element === collection[i] && exist) {
            index = i;
            exist = false;
        }
    });
    return index;
}

module.exports = calculate_elements_sum;
