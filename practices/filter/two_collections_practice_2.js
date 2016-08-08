'use strict';
// var _ = require('../lodash/mylodash.js');
// var _ = require('lodash');
var _ = require('../../tools/prolodash.js');

function choose_no_common_elements(collection_a, collection_b) {

    // var result = [];
    //
    // _.foreach(collection_a,function(n) {
    //     if(! _.is_exist(collection_b,n)) {
    //         result.push(n);
    //     }
    // });
    //
    // _.foreach(collection_b,function(n) {
    //     if(! _.is_exist(collection_a,n)) {
    //         result.push(n);
    //     }
    // })

    // return result;

    // getNoIntersection(collection_a, collection_b);
    return _(collection_a).no_intersection(collection_b).value();
}

function getNoIntersection(array1, array2) {
    var result = [];
    var judge = {};

    _.forEach(array1, function(item) {
        if(array2.indexOf(item) === -1 && !judge[item]) {
            result.push(item);
            judge[item] = item;
        }
    })
    console.log(result);
}

module.exports = choose_no_common_elements;
