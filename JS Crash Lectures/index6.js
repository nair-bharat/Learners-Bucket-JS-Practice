const a = {
    abc: function() {
        console.log(this);
    }
}

a.abc(); //invoking function as object - value of this refers to parent object, this will refer to value a


const a1 = {
    abc: function() {
        console.log(this);
    }
}

const a2 = a1.abc;
a2();
//if we grab the function and store it in a variable, and now when we invoke the variable, it is treated as normal function invokation, so the result of this will be window object.

const a3 = {
    abc: function() {
        function inner() {
            console.log(this);
        }
        inner();   
    }
} 

a3.abc();
//now as inner is invoked as normal function, the value of this will be window object


const a4 = {
    abc: function() {
        const inner = () => {
            console.log(this);
        }
        inner();
    }
} 

a4.abc() //now as inner is fat arrow function and it does not have keyword this, so the this value is pulled out from the nearest available parent which is
//ultimately a4

const a5 = {
    abc: function() {
        function inner() {
            console.log(this);
        }
        inner.call(this);
    }
} 

a5.abc(); //here we are passing this of abc, and now what it will do is that it temporarily assigns this inside inner with that value.


const a6 = {
    abc: function() {
        function inner(x) {
            console.log(x);
            console.log(this);
        }
        inner.call(this, 5);
    }
} 

a6.abc();


const a7 = {
    abc: function() {
        function inner(x) {
            console.log(x);
            console.log(this);
        }
        inner.apply(this, [6]);
    }
} 

a7.abc();

//the only diff is that we can pass call with this, var and apply with this, [array]

const a8 = {
    abc: function() {
        function inner(x) {
            console.log(x);
            console.log(this === a8);
        }
        const c = inner.bind(this);
        c('hello');
        c('world');
    }
} 

a8.abc();