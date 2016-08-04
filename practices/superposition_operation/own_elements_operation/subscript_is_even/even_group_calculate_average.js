'use strict';
var _ = require('../../../lodash/mylodash.js');

var even_group_calculate_average = function(collection){
    var array = [];

    array = _.filter(collection,function(n,i) {
        return (n % 2 === 0 && i % 2 != 0);
    });

    var temp = {};
    var result = [];

    _.foreach(array,function(n) {
        temp[(n + '').length] = temp[(n + '').length] || [];
        temp[(n + '').length].push(n);
    });

    for(var key in temp) {
        var sum = 0;
        _.foreach(temp[key],function(n) {
            sum += n;
        });
        result.push(sum / temp[key].length);
    }
    return result.length === 0 ? [0] : result;
};
module.exports = even_group_calculate_average;
