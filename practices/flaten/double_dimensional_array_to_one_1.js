'use strict';

// var _ =require('lodash');
var _ = require('../../tools/prolodash.js');
function double_to_one(collection) {

    // console.log(_.flatten());   //使用lodash方法去除数组嵌套，注意只能去除下一级数组。

    // var _ = require('../lodash/mylodash.js');
    // var result = [];
    //
    // _.foreach(collection,function(n) {
    //     if(n.length == undefined) {
    //         result.push(n);
    //     }
    //     for (var j = 0; j < n.length; j++) {
    //         result.push(n[j]);
    //         }
    //     });
    // return result;
    return _(collection).flatten().value();
}

module.exports = double_to_one;
