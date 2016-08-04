'use strict';

function grouping_count(collection) {

    var _ = require('../lodash/mylodash.js');
    var result = {};

    _.foreach(collection,function(n,i) {
        result[n] = result[n] || 0;
        result[n] ++;
    });
    console.log(result)
    return result;
}

module.exports = grouping_count;
