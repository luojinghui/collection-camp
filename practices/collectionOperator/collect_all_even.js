'use strict';
function collect_all_even(collection) {
//在这里写入代码
   var _ = require('../lodash/mylodash.js');
   var even_number =  _.filter(collection, function(n) {
       return n % 2 == 0;
   });
   return even_number;
}

module.exports = collect_all_even;
