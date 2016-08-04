'use strict';
var map_to_four_multiples_add_one = function(collection){
    var _ = require('../lodash/mylodash.js');

    return _.map(collection,function(n) {
        return n * 4 + 1;
    });
}
module.exports = map_to_four_multiples_add_one;
