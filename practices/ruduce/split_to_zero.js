'use strict';

function spilt_to_zero(number, interval) {
    var array = [number];
    var num = number % interval.toFixed(1);

    if(number <= interval) {
        array.push(number - interval);
    } else {
        if(num === 0) {
            for (var i = number - interval; i > 0; i -= interval) {
                array.push(Number(i.toFixed(1)));
            }
        } else {
            for ( i = number - interval; i >= num - interval ; i -=interval) {
                array.push(Number(i.toFixed(1)));
            }
        }
    }

    return array;
}

module.exports = spilt_to_zero;
