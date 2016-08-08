'use strict';
var _= require('../lodash/mylodash.js');

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];

  _.foreach(collection_a,function(n) {
      _.foreach(collection_b,function(m) {
           if(n % m === 0) {
              result.push(n);
          } 
      });
  });
  return result;
}

module.exports = choose_divisible_integer;
