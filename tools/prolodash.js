/*
*  初始化参数
*/
function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}

/*
*  each方法，返回值和序列
*/
function each(collection,fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i],i);
    }
}

_.prototype.each = function(fun) {
    each(this.collection,fun);
};

_.each = each;

/*
*  map方法
*/

function map(array,fun) {
    var result = [];

    _.each(array,function(n) {
        result.push(fun(n));
    });
    return result;
}

_.prototype.map = function(fun) {
    var result = [];

    result = _.map(this.collection,fun);
    this.collection = result;
    return this;
};

_.map = map;

/*
*  mapValue方法，用来返回遍历对象的value值。
*/

function mapValue(collection,fun) {
    each(collection,function(value,key) {
        value = fun(value,key);
        collection[key] = value;
    });
    return collection;
}

_.prototype.mapValue = function(fun) {
    return mapValue(this.collection,fun);
}

_.mapValue = mapValue;

/*
*  filter方法，用来过滤数组内容
*/

function filter(collection,fun) {
    var result = [];

    _.each(collection,function(n,i) {
        if(fun(n,i)) {
            result.push(n);
        }
    });
    return result;
}

_.prototype.filter = function(fun) {
    var result = [];

    result = filter(this.collection,fun);
    this.collection = result;
    return this;
};

_.filter = filter;

/*
*  reduce方法， 用来过滤出数组中的某一个值。
*/

function reduce(collection,fun) {
    var result = collection[0];

    _.each(collection,function(n,i) {
        if(i === 0) {
            result = n;
        } else {
            result = fun(result,n);
        }
    });
    return result;
}

_.prototype.reduce = function(fun) {
    return reduce(this.collection,fun);
}

_.reduce = reduce;

/*
*  range方法，用来生成从某个数至某个数之间的数字。
*/

function range(num_a,num_b) {
    var result = [];
    var step = Math.abs(num_b - num_a) / (num_b - num_a);
    var count = Math.abs(num_b - num_a);

    if(num_a === num_b) {
        result.push(num_a);
    } else {
        for (var i = 0; i <= count; i++) {
            var num = num_a + i * step;
            result.push(num);
        }
    }
    return result;
}

_.prototype.range = function(number_b) {
    var result = [];

    result = range(this.collection,number_b);
    this.collection = result;
    return this;
}

_.range = range;

/*
*  intersection方法，用来查找两个数组中的交集，带去重复。
*/

function intersection(collection_a, collection_b) {
    var result = [];
    var judge = {};

    // _.each(this.collection,function(n) {
    //     _.each(collection,function(m) {
    //         if(n === m) {
    //             result.push(n);
    //         }
    //     });
    // });
    _.each(collection_a, function(item) {
        if(collection_b.indexOf(item) >= 0 && !judge[item]) {
            result.push(item);
            judge[item] = item;
        }
    })
    return result;
}

_.prototype.intersection = function(collection) {
    result = intersection(this.collection,collection);
    // var result = [];
    //
    // this.each(function(n) {
    //     _(collection).each(function(m) {
    //         if(n === m) {
    //         result.push(n);
    //         }
    //     });
    // });
    this.collection = result;
    console.log(this.collection);
    return this;
}

_.intersection = intersection;

/*
*  intersection方法，用来查找两个数组中的不交集，带去重。
*/

function no_intersection(collection_a, collection_b) {
    var result = [];
    var judge = {};

    _.each(collection_a, function(item) {
        if(collection_b.indexOf(item) === -1 && !judge[item]) {
            result.push(item);
            judge[item] = item;
        }
    })
    return result;
}

_.prototype.no_intersection = function(collection) {
    result = no_intersection(this.collection,collection);

    this.collection = result;
    return this;
}

_.no_intersection = no_intersection;

/*
*  value方法，用来返回this中的collection的值。
*/

_.prototype.value = function() {
    return this.collection;
};

/*
*  num_change_letter方法，用来将数字转化为对应的字母。
*/

function num_change_letter(num) {
    var f = ['','a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var s = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var x = (num - 1) % 26;
    var y = parseInt((num -1) / 26);
    return result = (f[y]+s[x]);
}

_.prototype.num_change_letter = function(num) {
    return num_change_letter(num);
}

_.num_change_letter = num_change_letter;

/*
*  concat方法用于将两个数组进行连接。
*/

function concat(collection_a,collection_b) {
    var array = [];

    _.each(collection_a,function(n) {
        array.push(n);
    });
    _.each(collection_b,function(m) {
        array.push(m);
    });
    return array;
}

_.prototype.concat = function(collection_b) {
    return concat(this.collection,collection_b);
}

_.concat = concat;

/*
*  repeat方法用于数组去重。
*/

function repeat(collection,fun) {
    var array = {};
    var result = [];

    _.each(collection, item => {
        if(!array[item]) {
            result.push(item);
            array[item] = item;
        }
    })

    return result;
}

_.prototype.repeat = function() {
    this.collection = repeat(this.collection);

    return this;
}

_.repeat = repeat;

_.prototype.is_exist = function(element) {
    var index = false;

    this.each(function(n) {
        if(n  === element) {
            index = true;
        }
    });
    return index;
}

function sort(collection,judge) {
    var array = [];

    _.each(collection,function(n,i) {
        array.push(n);
    });
    _.each(array,function(n,i_a) {
        var temp = 0;
        _.each(array,function(m,i_b) {
            if(i_a < i_b && judge(array[i_a],array[i_b])) {
                temp = array[i_b];
                array[i_b] = array[i_a];
                array[i_a] = temp;
            }
        })
    })
    return array;
}

_.prototype.sort = function(judge) {
    return sort(this.collection,judge);

}

_.sort = sort;

function median(collection) {
    var collection = _.sort(collection,function(a,b) {
        return a > b;
    }).value();
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

_.prototype.median = function() {
    return median(this.collection);
}

_median = median;

/*
*  flatten方法，用来移除嵌套数组，使之成为一维数组。
*/

function flatten(collection) {
    var result = [];

    var foo = function(array) {
        _.each(array, item => {
            //_.isArray(item) ? foo(item) : result.push(item);
            Array.isArray(item) ? foo(item) : result.push(item);
        });
    };

    foo(collection);
    return result;
}

_.prototype.flatten = function() {
    result = flatten(this.collection);

    this.collection = result;
    return this;
}

_.flatten = flatten;

_.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

module.exports = _;
