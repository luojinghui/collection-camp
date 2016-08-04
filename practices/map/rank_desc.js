'use strict';
var _ = require('../lodash/mylodash.js');

var rank_desc = function(collection){
    return _.sort_array(collection,function(a,b) {
        return a < b;
    })
};

module.exports = rank_desc;
