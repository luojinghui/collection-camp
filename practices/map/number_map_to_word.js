'use strict';

var number_map_to_word = function(collection){
    var _ = require('../lodash/mylodash.js');
    var result = [];

    return _.map(collection,function(n) {
        return String.fromCharCode(n+96);
    });
};

module.exports = number_map_to_word;
