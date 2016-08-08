'use strict';
// var _ = require('../lodash/mylodash.js');

// var _ = require('lodash');
var _ = require('../../tools/prolodash.js');

function choose_common_elements(collection_a, collection_b) {
    return _(collection_a).intersection(collection_b).value();
    // console.log(_.intersection([1,2,3,4,5,3,13,5,2], [6,66,6,9,8,7,2,3]));
}

// function intersection(array1, array2) {
//     var result = [];
//
//     _.forEach(array1, function(item) {
//         if(array2.indexOf(item) >= 0) {
//             result.push(item);
//         }
//     })
//     console.log(result);
// }

module.exports = choose_common_elements;
