'use strict';
var _ = require('../lodash/mylodash.js');

function choose_no_common_elements(collection_a, collection_b) {

    var result = [];

    _.foreach(collection_a,function(n) {
        if(! _.is_exist(collection_b,n)) {
            result.push(n);
        }
    });
    
    _.foreach(collection_b,function(n) {
        if(! _.is_exist(collection_a,n)) {
            result.push(n);
        }
    })

    return result;
}

module.exports = choose_no_common_elements;
