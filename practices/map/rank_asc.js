'use strict';
// var _ = require('../lodash/mylodash.js');
var _ = require('../../tools/prolodash');

var rank_asc = function(collection){
    // return _.sort_array(collection,function(a,b) {
    //     return a > b;
    // });

    // return _(collection).sort((m, n) => m < n);
    return sort(collection);
};

function sort(array) {
    var i = 1;
    var index;
    var value;

    for(i = 1; i < array.length; i ++) {
        index = i;
        value = array[i];

        while(--index > -1) {
            if(array[index] < value) {
                array[index + 1] = array[index];
            } else {
                break;
            }
        }
        array[index + 1] = value;
    }
    console.log(array);
    return array;
}


/*
 return collection.sort(sortNumber);
 var array_sort = [];
 if(collection.length === 1) {
     return collection[0];
 } else {
 for (var i = 0; i < collection.length; i ++) {
     var temp = 0;

     for(var j = i + 1; j < collection.length; j ++) {
         if (collection[i] < collection[j]) {
             temp = collection[j];
             collection[j] = collection[i];
             collection[i] = temp;
             }
         }
     }
 }
 return collection;
 */

    // var array = [1,4,2,4,7,3,5];
    //
    // function sort(array, fun) {
    //     _.each(array, function(value1, i1) {
    //         var temp;
    //
    //         _.each(array, function(value2, i2) {
    //             if()
    //         })
    //     })
    // }

    // function sort(array) {
    //     var i = 1;
    //     var in_index;
    //     var step;
    //     var value;
    //
    //     for (i = 1; i < array.length; i++) {
    //
    //         in_index = i;
    //         step = in_index;
    //         value = array[in_index];
    //
    //         while (--in_index > -1) {
    //             if (array[in_index] > value) {
    //                 array[in_index + 1] = array[in_index];
    //             } else {
    //                 break;
    //             }
    //         }
    //
    //         array[in_index + 1] = value;
    //     }
    //
    //     console.log(array);
    //     return array;
    // }


module.exports = rank_asc;
