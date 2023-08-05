//constructor invokation

function ABC() {
    "use strict"
    console.log(this); //gives empty object, in strict mode as well.
}

const abc1 = new ABC();
const abc2 = new ABC();

console.log(abc1 == abc2);

console.log(abc1)