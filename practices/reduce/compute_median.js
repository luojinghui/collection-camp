'use strict';
var _ = require('../lodash/mylodash.js');

function compute_median(collection) {
    return _.median(collection);
}

module.exports = compute_median;
