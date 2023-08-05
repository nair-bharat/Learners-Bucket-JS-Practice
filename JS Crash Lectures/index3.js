//1st way

function abc() {
    console.log("first way to define function");
}

abc();


//2nd way

const abc1 = function() {
    console.log("function expression / anonymous function");
}


abc1();

//3rd way

const a = {
    abc: function() {
        console.log("this is function declaration, function inside an object, it is also known as method");
    }
}

a.abc();

//4th way - IIFE

(function() {
    console.log("IIFE");
}());

//An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop.