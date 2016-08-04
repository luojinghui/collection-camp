'use strict';

function average_to_letter(collection) {
    var sum = 0 ;
    var _ = require('../../lodash/mylodash.js');

    _.foreach(collection,function(n) {
        sum += n;
    });

    var ave = Math.ceil( sum / (collection.length ) );

    return String.fromCharCode(ave + 96);
}

module.exports = average_to_letter;
