function abc() {
    console.log(this);
}

abc(); //window object is printed

// for node.js - global object
// for browser - window object

function abc1() {
    console.log(this == window);
}

abc1(); //returns true

function abc2() {
    this.a = "pqr";
}

abc2(); //called the function

console.log(window.a) //checking for the window object

function abc3() {
    "use strict"
    console.log(this);
}

abc3();

//if function is created in strict mode, value of this -> undefined, otherwise -> window object




