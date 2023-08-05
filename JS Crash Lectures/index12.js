const a = { b: 'abc' };

console.log(a.b && 'the property b is present in object a'); //present... truthy value present in a

console.log(a.c && 'the value of c is not present in a'); //undefined

//|| works exactly the opposite.



//now for ?? - optional - it will returns the right hand side value if the value is null or undefined.


const d = { e: 'abc', f: null };

console.log(d.e ?? 'here the value of e is present');

console.log(d.f ?? 'here the value of f is null');

console.log(d.g ?? 'here the value of g is undefined');

