'use strict';
function four(n) {
    return n * 3;
}
var map_to_three_multiples = function(collections){
    var _ = require('../lodash/mylodash.js');

    return _.map(collections,function(n) {
        return n * 3 ;
    });
}

module.exports = map_to_three_multiples;
