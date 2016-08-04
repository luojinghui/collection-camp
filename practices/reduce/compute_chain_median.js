'use strict';
var _ = require('../lodash/mylodash.js');
function compute_chain_median(collection) {
    var array = [];
    var array_2 = [];

    array = collection.split('->');
    _.foreach(array,function(n) {
        array_2.push(Number(n));
    });
    return _.median(array_2);
}
module.exports = compute_chain_median;


/*
'use strict';

function compute_chain_median(collection) {
    var array = [];
    var num = "";

    for(var i = 0; i < collection.length; i++) {
        if(parseInt(collection[i]) === parseInt(collection[i])) {
            num += collection[i];
        }else {
            if(num.length != 0){
                array[array.length] = parseInt(num);
                num = "";
            }
        }
        if(i === collection.length-1){
            array[array.length] = parseInt(num);
        }
    }

    for(var i = 0; i < array.length; i++) {
        for(var j = i; j < array.length; j++) {
            if(array[i] > array[j]) {
                array[i] = array[i] + array[j];
                array[j] = array[i] - array[j];
                array[i] = array[i] - array[j];
            }
        }
    }

    if(array.length % 2 === 0) {
        return (array[array.length/2-1]+array[array.length/2])/2;
    }else{
        return array[parseInt(array.length/2)];
    }

}

module.exports = compute_chain_median;
*/
