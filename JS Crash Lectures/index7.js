//closure

function outer() {
    let a = 10;
    return function inner() {
        console.log(a);
        a += 10;
    }
}

const child0 = outer();
child0();
child0();
child0();
child0();
child0();

//the child function are able to access the variable or properties of parent function even after the parent execution has ended

//currying


function outer1() {
    let a = [];
    return function inner1(x) {
        if (a.length === 4) {
            return a.reduce((a, b) => a + b, 0);
        }
        else {
            a.push(x);
            return inner1;
        }
    }
}

const child = outer1();
//console.log(child);
const child1 = child(1);
const child2 = child1(2);
const child3 = child2(3);
const child4 = child3(4);

console.log(child4())

//currying - we keep on returning functions until a desired output is met.

//in interview question, there are diff currying problems, check videos.



