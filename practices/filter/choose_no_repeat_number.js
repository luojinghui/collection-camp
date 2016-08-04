'use strict';
// var _ = require('../lodash/mylodash.js');
var _ = require('lodash');

function choose_no_repeat_number(collection) {
    // return _.no_repeat(collection);
    return remove_same_ele(collection);
}

function remove_same_ele(array) {
    var result = [];

    _.forEach(array, function(item) {
        if(result.indexOf(item) < 0) result.push(item);
    });
    return result;
}

module.exports = choose_no_repeat_number;
