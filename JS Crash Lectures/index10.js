//arrays in JS are also known as objects.

const arr = [1, 2];
//const [first, last] = arr;

//console.log(first, last);

const arr1 = [1, 2, 3];
const [first, , last] = arr1;

//now the above expression will skip the second element.

console.log(first, last);


//spread and rest operator in array.

const arr3 = [3, 4, 5];
const arr4 = [5, 6, 7];

const arr5 = [...arr3, ...arr4];
console.log(arr5);
//spread operator to spread the values

//rest operator to pull the values.
const [b, ...rest] = arr3;
console.log(b);

//of loop in arr

for(let value of arr3) {
    console.log(value);
}

for(let value in arr3) {
    console.log(value); //this gives indices of array, just like keys in objects
}


//we can convert array to object using spread operator

const obj = {...arr3};

console.log(obj);


const obj1 = {
    b: 5,
    c: function() {
        console.log("inside a function c");
    }
};

console.log(obj1);

//we can't do this because object are not iterable.
//const arr6 = [...obj1];

//console.log(arr6); 