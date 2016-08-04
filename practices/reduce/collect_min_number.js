'use strict';
var _ = require('../lodash/mylodash.js');

function collect_min_number(collection) {
    return _.reduce(collection,function(a,b) {
        return Math.min(a,b);
    })
}

module.exports = collect_min_number;

/*
在这里写入代码
var result = collection[0];
for(var i=0; i<collection.length; i++) {
    if (collection[i] < result) {
        result = collection[i];
    }
}
return result;
*/
