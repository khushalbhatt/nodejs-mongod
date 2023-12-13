//how to produce a promise

const promise = new Promise((resolve, reject) => {
    const a=4
    const b=2
    setTimeout(() => {
        if(a===b)
        {
            resolve("values are equal");
        }else{
            reject("values are not equal");
        }
    }, 1500);
    }
);

// pending
//console.log(promise);

//fulfilled
promise.then((data)=>{
    console.log(data);
})
//rejected
promise.catch((err)=>{
    console.log(err);
});

//fullfilled 
