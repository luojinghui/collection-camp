'use strict';
var _ = require('../lodash/mylodash.js');

var rank_asc = function(collection){
    return _.sort_array(collection,function(a,b) {
        return a > b;
    });

};

module.exports = rank_asc;

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
