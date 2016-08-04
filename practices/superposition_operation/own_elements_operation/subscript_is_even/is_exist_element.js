'use strict';
var _ = require('../../../lodash/mylodash.js');
var is_exist_element = function(collection,element){
    // for (var i = 0; i < collection.length; i++) {
    //     if (i % 2 === 0) {
    //         if (collection[i] === element) {
    //             return true;
    //         }
    //     }
    // }
    //
    // for (var j = 0; j < collection.length; j++) {
    //     if (j % 2 === 0) {
    //         if (collection[j] != element) {
    //             return false;
    //         }
    //     }
    // }

    var array = _.filter(collection,function(n,i) {
        return (i % 2 === 0);
    });

    return _.is_exist(array,element);
};
module.exports = is_exist_element;
