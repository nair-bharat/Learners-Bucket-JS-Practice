// promises and async...await


const test = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(time);
        }, time);
    })
};

const promise1 = test(1000); //this will resolve after 1 second.
promise1.then((val) => {
    console.log(val);
}, (error) => {console.log(error);})

//we can use this way or we can explicity use catch block.

promise1.then((val) => {
    console.log(val);
},).catch((error) => {
    console.log(error);
})


//we are passing time while resolving, so 1000 is printed.

//then function accepts 2 callbacks, one is for resolve and other one for reject.


async function abc() {
    try {
        const response = await test(1000);
        //it will wait till line 33 is executed.
        console.log(response);
    }
    catch(e) {
        console.log("error", e);
    }
}


abc();