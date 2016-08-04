
function _() {}

_.foreach = function(collection,fun) {
   for (var i = 0; i < collection.length; i ++) {
       fun(collection[i],i);
   }
}

/*
map方法是映射数组，不会改变数组的长度，只会改变数组中对应元素。
*/
 _.map = function(array,fun) {
    var result = [];

    _.foreach(array,function(n) {
        result.push(fun(n));
    });

    return result;
}

/*
filter方法是可以改变数组，通过某种function方法返回true和false，若是true，则将数组push进去，并返回。
*/
_.filter = function(collection,fun) {
    var result = [];

    _.foreach(collection,function(n,i) {
        if(fun(n,i)) {
            result.push(n);
        }
    });
    return result;
}

/*
reduce方法是通过一个function的到数组中的某一个元素。
*/
 _.reduce = function(array,fun) {
    var result = array[0];

    _.foreach(array,function(n,i) {
    	if(i === 0){
        	result = n;
    	} else {
        	result = fun(result,n);
    	}
    	});
    return result;
}

_.is_exist = function(collection,element) {
    var index = false;

    _.foreach(collection,function(n) {
        if(n === element) {
            index = true;
        }
    });
    return index;
}


_.sort_array = function(collection,judge) {
    var array = [];

    _.foreach(collection,function(n) {
        array.push(n);
    });

    for (var i = 0; i < array.length; i++) {
        var temp = 0;

        for(var j = 0; j < array.length; j ++) {
            if(judge(array[i],array[j])) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

_.range = function(number_a,number_b) {
    var result = [number_a];
    var step = Math.abs(number_b - number_a) / (number_b - number_a);
    var count = Math.abs(number_a - number_b);

    if(step) {
        for (var i = 0; i < count; i++) {
            var num = number_a + (i + 1) * step;
            result.push(num);
        }
    }
    return result;
}

_.median = function(array) {
    var collection = _.sort_array(array,function(a,b) {
        return a > b;
    });
    var result = 0;
    var len = parseInt(collection.length / 2);
    var len_2 = parseInt(collection.length / 2 - 1);

    if(collection.length % 2 === 0) {
        result = (collection[len] + collection[len_2]) / 2 ;
    } else {
        result = collection[len];
    }
    return result;
}

_.intersection = function(collection_a,collection_b) {
    var result = [];

    _.foreach(collection_a,function(n) {
        _.foreach(collection_b,function(m) {
            if(n === m) {
                result.push(n);
            }
        });
    });
    return result;
}

_.num_change_letter = function(num) {
    var NUM = 26;
    var NUM_1 = 96;
    var letter;

    if(num > NUM) {
        var num_unit = parseInt( num / NUM);
        var num_multiple = num_unit * NUM;

        if( num % NUM === 0) {
            letter = (String.fromCharCode((num_unit-1) + NUM_1) +
                String.fromCharCode(NUM + NUM_1));
            } else {
                letter = (String.fromCharCode(num_unit + NUM_1) +
                String.fromCharCode(num - num_multiple + NUM_1));
        }
    }else {
        if(num % NUM === 0) {
        letter = (String.fromCharCode(num + NUM_1));
            } else {
                var num_1 = num % NUM;
                letter = (String.fromCharCode(num_1 + NUM_1))
        }
    }
    return letter;
}

_.num_change_letter2 = function(num) {
    var f = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i",
     "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z"];
    var s = ["a", "b", "c", "d", "e", "f", "g", "h", "i"
    , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
     "u", "v", "w", "x", "y", "z"];
    var x = (num - 1) % 26;
    var y = parseInt((num - 1) / 26);

    return (f[y] + s[x]);
}

_.remove_element = function(index,array) {
    if(index >= 0 && index < array.length) {
        for(var i = index; i < array.length; i ++) {
            array[i] = array[i + 1];
        }
            array.length = array.length - 1;
    }
    return array;
}

_.concat = function(array_1,array_2) {
    var array = [];

    _.foreach(array_1,function(n) {
        array.push(n);
    });

    _.foreach(array_2,function(n) {
        array.push(n);
    });
    return array;
}

_.no_repeat = function(array) {
    var arr = {};
    var result = [];

    _.foreach(array,function(n) {
        arr[n + 'a'] = arr[n + 'a'] || 0;
    });

    for(var key in arr) {
        result.push(parseInt(key));
    }

    return result;
}
module.exports = _;
