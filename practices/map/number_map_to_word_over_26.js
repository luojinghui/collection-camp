'use strict';
var _ = require('../lodash/mylodash.js');

var number_map_to_word_over_26 = function(collection){
    var letter = [];

    _.foreach(collection,function(n) {
        letter.push(_.num_change_letter(n));
    });
    return letter;
};

module.exports = number_map_to_word_over_26;
