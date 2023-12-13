function placeorder(drink)
{
    return new Promise((resolve, reject) => {
        if(drink==="coffee")
        {
            //console.log("Order placed");
            resolve("Order placed");
        }
        else{
            reject("Order not placed");
        }
    });
}

function processorder(order)
{
    return new Promise((resolve, reject) => {
        console.log("Order is being processed");
        resolve(`${order} is served`);
    });
}

// placeorder("coffee").then((order)=>{
//     console.log("Order placed");
//     let orderprocess=processorder(order);
//     return orderprocess;
// }).then((orderprocess)=>{
//     console.log(orderprocess);
// })

// placeorder("tea").then((order)=>{
//     console.log("Order rejected");
// })


//ASYNC AWAIT

async function serveorder()
{
    try{
        let orderplaced=await placeorder("coffee");
        console.log(orderplaced);
        let orderprocess=await processorder(orderplaced);
        console.log(orderprocess);
    }
    catch(err)
    {
        console.log(err);
    }
}

serveorder();
