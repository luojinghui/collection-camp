'use strict';
var _ = require('../lodash/mylodash.js');

function collect_last_element(collection) {
    return _.reduce(collection,function(a,b) {
        return b;
    })
}

module.exports = collect_last_element;
