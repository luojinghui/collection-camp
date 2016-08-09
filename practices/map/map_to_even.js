'use strict';

// var _ = require('../../tools/prolodash.js');
var _ = require('../../tools/prolodash');
function map_to_even(collection){
    // return _.map(collection,function(n) {
    //     return n * 2;
    // });

    return _(collection).map(item => item * 2).value();
}
// function map(array, fun) {
//     var result = [];
//
//     _.each(array, item => {
//         result.push(fun(item));
//     })
//
//     return result;
// }

module.exports = map_to_even;
