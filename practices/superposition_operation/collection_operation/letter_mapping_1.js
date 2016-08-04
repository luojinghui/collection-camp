'use strict';

function even_to_letter(collection) {
    var array = [];
    var _ = require('../../lodash/mylodash.js');

    _.foreach(collection,function(n,i) {
        if(n % 2 === 0 ) {
            array[array.length] = String.fromCharCode(i + 97);
        }
    });
    return array;
}

module.exports = even_to_letter;
