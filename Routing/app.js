const express = require('express');
const mymiddleware = require('./middlewares/middle.js');
const morgan = require('morgan');
const app = express();

app.use(express.json());

//Custom middleware

app.use(function(req,res,next){
    console.log("First middleware");
     next();
 })
 
app.use(mymiddleware);

app.use(morgan('tiny'));

//Routing parameters
const users =[
    {id:1,name:"Maths"},
    {id:2,name:"Science"},
    {id:3,name:"English"},
    {id:4,name:"Hindi"},
    {id:5,name:"Sanskrit"}
]
app.get('/user/:id',(req,res)=>{
    let user = users.find(user => user.id === parseInt(req.params.id));
    if(!user) res.status(404).send("User not found");
    res.send(user.name);
},(err,req,res,next)=>{
    console.log(err);
    res.status(500).send("Some error occured");
});

app.post('/user',(req,res)=>{
    let user = {
        id:users.length+1,
        name:req.body.name
    }
    users.push(user);
    res.send(user);
})
app.get('/user',(req,res)=>{
    res.send(users);
})
app.put('/user/:id',(req,res)=>{
    let user = users.find(user => user.id === parseInt(req.params.id));
    if(!user) res.status(404).send("User not found");
    user.name = req.body.name;
    res.send(user);
})

app.delete('/user/:name',(req,res)=>{
    let updatedusers = users.filter(user => user.name !== parseInt(req.params.name));
    if(!updatedusers) res.status(404).send("User not found");
    users=updatedusers;
    res.send(updateduser);
})

app.delete('/user/:id',(req,res)=>{
    let user = users.find(user => user.id === parseInt(req.params.id));
    if(!user) res.status(404).send("User not found");
    const index = users.indexOf(user);
    users.splice(index,1);
    res.send(updateduser);
})

const port=process.env.PORT||3001;

app.listen(port,()=>{
    console.log("listening to the port 3001");
});
