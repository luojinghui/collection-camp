'use strict';

function collect_max_number(collection) {

    var _ = require('../lodash/mylodash.js');
    return _.reduce(collection,function(a,b) {
        return Math.max(a,b);
    });
}
module.exports = collect_max_number;

/*
var result;
var it = 0;

if(collection.length === 1) {
    result = collection[0];
}else {
    for (var i = 0; i < collection.length; i++) {
        if(collection[it] < collection[i]) {
            it = i;
        }
}
}
return collection[it];
*/
