'use strict';

var number_map_to_word = function(collection){
    // var _ = require('../lodash/mylodash.js');
    var _ = require('../../tools/prolodash');
    var result = [];

    // return _.map(collection,function(n) {
    //     return String.fromCharCode(n+96);
    // });

    return _(collection).map(item => _.num_change_letter(item)).value();
};

module.exports = number_map_to_word;
