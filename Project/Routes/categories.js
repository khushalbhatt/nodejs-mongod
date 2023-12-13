const express = require('express');
const Joi = require('joi');

const router = express.Router();

const category=[
    {id:1,name:"Web"},
    {id:2,name:"Mobile"},
    {id:3,name:"Photography"}
]
router.get('/',(req,res)=>{
    res.send("E-Learning App");
})

router.get('/category',(req,res)=>{
    res.send(category);
})

router.post('/category',(req,res)=>{

    const {error} = validationdata(req.body);
    if(error)
    {
        res.status(400).send(error.details[0].message);
        return;
    }

    let category={
        id:category.length+1,
        name:req.body.name
    }
    category.push(category);
    res.send(category);
})

router.put('/category/:id',(req,res)=>{
    let category = category.find(category => category.id === parseInt(req.params.id));
    if(!category) res.status(404).send("Category not found");
    category.name = req.body.name;
    res.send(category);
})

router.delete('/category/:id',(req,res)=>{
    let updatedcategory = category.filter(category => category.id !== parseInt(req.params.id));
    if(!updatedcategory) res.status(404).send("Category not found");
    category=updatedcategory;
    res.send(updatedcategory);
})

router.get('/category/:id',(req,res)=>{
    let category = category.find(category => category.id === parseInt(req.params.id));
    if(!category) res.status(404).send("Category not found");
    res.send(category);
})

function validationdata(category){
    const schema = Joi.object({
        name:Joi.string().min(3).required()
    })
    return schema.validate(category);
}

module.exports = router;
