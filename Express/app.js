const express = require('express');

const app = express();
 
//get, post, put, delete

app.get('/',(req,res)=>{
    res.send("Hello from the express");
});

app.get('/about',(req,res)=>{
    res.send("Hello from the about page");
});

app.get('/contact',(req,res)=>{
    res.send("Hello from the contact page");
});

//Routing parameters

app.get('/user/:id',(req,res)=>{
    res.send(req.params.id);
});


const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log("listening to the port 3000");
});
