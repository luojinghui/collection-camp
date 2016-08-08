'use strict';
var _ = require('lodash');

function grouping_count(collection) {

    // var _ = require('../lodash/mylodash.js');
    // var result = {};
    //
    // _.foreach(collection,function(n,i) {
    //     result[n] = result[n] || 0;
    //     result[n] ++;
    // });
    // console.log(result)
    // return result;
    get_words_num(collection);
}

function get_words_num(array) {
    var result = {};

    _.forEach(array, function(item) {
        result[item] = result[item] || 0;
        result[item] ++;
    })

    console.log(result);
}

module.exports = grouping_count;
