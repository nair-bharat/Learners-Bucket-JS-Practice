
//V IMP - arrays in JS are also objects.

const a = {
    b: 10,
    c: function() {
        return this.b + 10;
    }
};

// a is an object.

//b is property [holds the values] and c is method [function that can perform operations]


//const b = a.b;
//console.log(b);

//but instead of the above statement we can make use of object destructuring. //from ES6

//const { b } = a;
//console.log(b);


//so if we want to keep any other variable name, say to b then we can do that as well.

const {b : aliases} = a;
console.log(aliases);



//spread operator

const d = {
    e : 20,
};

//now let's say we want to combine values of objects a and d, then we can use spread operator

const combined = {...a, ...d};

console.log(combined);

//now what we did at line 40 is that we are spreading all values of a and all values of d into combined.



//rest operator

//rest operator will pull the values b out of combined and rest of the variables will be stored in rest.

const { b, ...rest } = combined;

console.log(b);

console.log(rest);


//if we are using it on right hand side, it works as spread operator.
//if we are using it on left hand side, it works as rest operator.


//so the above concepts can be used in functions.

function abc(...x) {
    console.log(x);
}

//the above works as rest operator as we are accumulating the  values of array.

abc([1, 2, 3]);



//

function abc1(x1, x2, x3) {
    console.log(x1, x2, x3);
}

const arr = [5, 6, 7];
abc1(...arr); //while invoking the function if we use ... array then it will work as spread operator
//it will pull individual elements and pass it to the variables.


function abc2({b, c}) {
    console.log(c);
}

abc2(a);

//destructuring
