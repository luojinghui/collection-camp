'use strict';
var _ = require('../lodash/mylodash.js');

function compare_collections(collection_a, collection_b) {
    //在这里写入代码
    var result;

    _.foreach(collection_a,function (n) {
        for(var j = 0; j < collection_b.length; j++) {
            if(n === collection_b[j]) {
                return true;
            }
        }
    });
}

module.exports = compare_collections;
