'use strict';

function double_to_one(collection) {

  //在这里写入代码
//  var _ = require('../lodash/');

//  return _.flatten(collection);
    var _ = require('../lodash/mylodash.js');
    var result = [];

    _.foreach(collection,function(n) {
        if(n.length == undefined) {
            result.push(n);
        }
        for (var j = 0; j < n.length; j++) {
            result.push(n[j]);
            }
        });
    return result;
}



module.exports = double_to_one;
