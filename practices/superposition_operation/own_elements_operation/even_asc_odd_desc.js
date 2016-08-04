'use strict';
var _ = require('../../lodash/mylodash.js');

var even_asc_odd_desc = function(collection){
    var array = [];
    var array_2 = [];
    var collection_a = _.sort_array(collection,function(a,b) {
        return a < b;
    });

    _.foreach(collection_a,function(n) {
        if(n % 2 === 0) {
            array.push(n);
        }
    });

    for (var a = collection_a.length - 1; a >= 0; a --) {
        if(collection_a[a] % 2 != 0) {
            array_2.push(collection_a[a]);
        }
    }
    return _.concat(array,array_2);
};
module.exports = even_asc_odd_desc;
