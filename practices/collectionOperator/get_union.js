'use strict';
var _ = require('../lodash/mylodash.js');

function get_union(collection_a, collection_b) {
    // var array = _.concat(collection_a,collection_b);
    //
    // return _.no_repeat(array);

    let con_array = concat(collection_a, collection_b);
    return remove_same_ele(con_array);
}
module.exports = get_union;

function concat(array1, array2) {
    let con_array = [];
    _.foreach(array1, item => con_array.push(item));
    _.foreach(array2, item => con_array.push(item));

    return con_array;
}

function remove_same_ele(array) {
    var result = [];

    _.foreach(array, item => {
        if(result.indexOf(item) < 0) result.push(item);
    })

    return result;
}


/*
function grouping_count(collection) {
  //
  // //在这里写入代码
  // var _ = require('../lodash');
  // return _.countBy(collection);
  //collection.sort();
  var temp = {};

  for(var i = 0;i < collection.length;i++) {
    //   temp[collection[i]]=temp[collection[i]]||0;
    //   temp[collection[i]]++;
      if(!! temp[collection[i]]) {
          temp[collection[i]]++;
      }else{
          temp[collection[i]]=0;
          temp[collection[i]]++;
      }

  }
  return temp;
}

module.exports = grouping_count;
*/
