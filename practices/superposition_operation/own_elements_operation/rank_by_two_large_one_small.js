'use strict';
var _ = require('../../lodash/mylodash.js');

function rank_by_two_large_one_small(collection){
    var array = _.sort_array(collection,function(a,b) {
        return a < b;
    });

    for (var a = 0; a < array.length; a + = 3) {
        var temp_letter = 0;
        
        if(a < array.length - 2) {
            temp_letter = array[a];
            array[a] = array[a + 1];
            array[a + 1] = array[a + 2];
            array[a + 2] = temp_letter;
        }
    }
    return array;
}
module.exports = rank_by_two_large_one_small;
