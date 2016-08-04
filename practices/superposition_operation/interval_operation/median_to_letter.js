'use strict';
var _ = require('../../lodash/mylodash.js');

function median_to_letter(collection) {
    var result = Math.ceil(_.median(collection));
    return _.num_change_letter(result);
}

module.exports = median_to_letter;
