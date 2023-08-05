

const test = (time) => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(time);
        }, time);
        
       //resolve(time);
    })
};

const pr = test(3000);

console.log("this is printed before the promise");

console.log(pr); //promise pending

pr.then((value) => {
    console.log(value);
}).catch(error => {
    console.error("this is because of the promise which got rejected");
});


const someFunction = async() => {

    const response = await test(4000);
    console.log("this is printed only after line 29 is executed");
    //so the line 30 waits for 4 seconds to be printed.
    console.log(response);
}


someFunction();

//if we declare a function with async keyword, it always return a promise.

//let's see the below example.

async function demoFunction2() {

    try {
        const response = await test(5000);
        return response;

        //the above statement returns a promise.
    }

    catch(e) {
        console.log(e);
    }
    
}

const value = demoFunction2();
console.log(value);

value.then(val => console.log(val)); //now 5000 is printed because the promise is resolved.