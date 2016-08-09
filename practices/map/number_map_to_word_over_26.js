'use strict';
// var _ = require('../lodash/mylodash.js');
var _ = require('../../tools/prolodash');

var number_map_to_word_over_26 = function(collection){
    var letter = [];

    // _.each(collection,function(n) {
    //     letter.push(_.num_change_letter(n));
    // });
    return _(collection).map(item => _.num_change_letter(item)).value();
};

module.exports = number_map_to_word_over_26;
