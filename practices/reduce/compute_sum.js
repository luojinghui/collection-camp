'use strict';

function calculate_elements_sum(collection) {
    var _ = require('../lodash/mylodash.js');
    return _.reduce(collection,function(a,b) {
        return a + b;
    });
}
module.exports = calculate_elements_sum;
