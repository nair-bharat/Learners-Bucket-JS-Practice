//default values

function abc(x, y = 10) {
    console.log(x);
}

abc(5);


//pulling out the keys from the object

const a = {
    b: 10,
    c: function() {
        return this.b + 10;
    }
};

console.log(a['b']); //1st way

console.log(a.b); //using period operator


for(let key in a) {
    //console.log(key);
    console.log(a[key]);
}

//so instead of the above if we put period then we get undefined printed on to the console.

for(let key in a) {
    console.log(a.key);
}

//always use square bracket as the default.

