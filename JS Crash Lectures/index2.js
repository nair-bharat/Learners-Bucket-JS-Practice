//var a = undefined

{
    var a = 10;
}

console.log(a);

{
    let c = 90;
    console.log(c);
}

//console.log(c); -> this throws an error, because c is not hoisted


//how var is function scoped ?

function abc() {
    var d = 10;
}

//console.log(d); //we won't  be able to console log d, so that is why d is function scope, not able to access a function outside

//let and const does not get hoisted, here the concept of temporal dead zone comes in place.

function abc2() {
    console.log(e);
    let e = 5;
}

//abc2();

//but we will be able to do similarly for var

function abc3() {
    console.log(f);
    var f = 10;
}

abc3(); //undefined for f