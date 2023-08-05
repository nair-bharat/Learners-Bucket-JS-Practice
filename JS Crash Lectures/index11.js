// prototype - way to extend / inherit a function or object in JS

let arr = [1, 2, 3];
Array.prototype.find = function() {
    console.log(this);
};

arr.find();

let arr1 = [3, 4, 5];

//whenever we declare an array as the above [arr1], it is declared as a constructor, it returns a new instance
//of the array and because as a new instance is returned, we are able to use prototype and then we are able to attach find method on it.

arr1.find();

//prototype is extended to an array and the method is find.

//works only on objects and constructor function.

//because constructor function returns an object.


//if we want to add our own custom methods to array or objects then we can use prototype.
//for eg: arr.filter, arr.map, arr.reduce.


let arr2 = [3, 4, 5, 6, 7];

Array.prototype.newFunction = function() {

    let sum = 0;
    for(let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }

    return sum;
}

const res = arr2.newFunction();
console.log(res);


//for eg: other eg:

Array.prototype.find = function(val) {
    return this.includes(val);
}


let arr3 = [3, 4, 5, 6, 7, 8, 9];
console.log(arr3.find(1));

console.log(arr3.find(4));

// this - refers to array

