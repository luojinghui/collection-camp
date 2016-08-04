'use strict';
var _ = require('../../lodash/mylodash.js');

function one_add_next_multiply_three(collection){
    var array = [];
    var temp = 0;

    _.foreach(collection,function(n,i) {
        if(i < collection.length - 1) {
            temp = (n + collection[i+1]) * 3;
            array.push(temp);
        }
    });
    return array;
}
module.exports = one_add_next_multiply_three;
