'use strict';
var _ = require('../lodash/mylodash.js');

function double_to_one(collection) {
    var result = [];

    _.foreach(collection,function(n) {
        for(var j = 0; j < n.length; j++) {
            result.push(n[j]);
        }
    });
    return _.no_repeat(result);
}

module.exports = double_to_one;
