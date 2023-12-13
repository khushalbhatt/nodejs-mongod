const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/course')
.then(()=>console.log("Connected to mongodb"))
.catch(err=>console.error("Could not connect to mongodb",err));

//Schema

const courseSchema = new mongoose.Schema({
    name:{type:String,required:true,minlength:5,maxlength:255}, 
    creator:String,
    publishdate: {type:Date,default:Date.now},
    ispublished:{type:Boolean,default:false,required:true},
    rating:{type:Number,required:function(){return this.ispublished}} //custom validator
});

//Model
const Course = mongoose.model('Course',courseSchema);  //Course is the name of the collection

async function CreateCourse(){
    const course = new Course({
        name:"Javascript",
        creator:"Khushal",
        ispublished:true,
        rating:4.5
    });

    try{
        await course.save().then(result=>console.log(result));
        // await course.validate();  same as save
    }
    catch(ex){
        //console.log(ex.message);
        // Error Validators
        for(field in ex.errors)
        {
            console.log(ex.errors[field].message);
        }
    }
}

//CreateCourse();

//How to get courses
async function GetCourses(){
    // const courses = await Course.find();
    // console.log(courses);
    // const course1 = await Course.find({name:"Angular"});
    // const course2 = await Course.find({name:"Angular"}).select({name:1});
    // console.log(course1);
    // console.log(course2);
    const course1 = await Course.find({rating:{$gte:4}}).sort({name:1});
    const course2 = await Course.find({rating:{$in:[3.5,4.5]}}).sort({name:1});

    console.log(course1);
}
GetCourses();

// Comparison operators
// eq (equal)
// ne (not equal)   
// gt (greater than)
// gte (greater than or equal to)
//    const course1 = await Course.find({rating:{$gte:4}}).sort({name:1});
// lt (less than)
// lte (less than or equal to)
// in
// const course2 = await Course.find({rating:{$in:[3.5,4.5]}}).sort({name:1});
// not in


//Logical Operators
//or and
//const course2 = await Course.find({rating:{$in:[3.5,4.5]}}).sort({name:1}).or([{name:"Angular"},{creator:"Khushal"}]);

//How to update a document
async function UpdateCourse(id){
    const course = await Course.findById(id);
    if(!course) return;
    course.ispublished = true;
    course.creator = "Khushal";
    const result1 = await course.save();
    console.log(result1);
    const result2 = await Course.update({_id:id},{
        $set:{
            creator:"Khushal",
            ispublished:true
        }
    });
    console.log(result2);
    const result3 = await Course.findByIdAndUpdate({_id:id},{
        $set:{
            creator:"Khushal",
            ispublished:true
        }
    },{new:true});
    console.log(result3);
}

//UpdateCourse("5f9d6a7e4e2d1d2c5c6a7f4c");

//How to delete a document

async function DeleteCourse(id){
    let course = await Course.findByIdAndDelete(id);
    console.log(course);
}

//Data validation

// const courseSchema = new mongoose.Schema({
//     name:{type:String,required:true},
//     creator:String,
//     publishdate: {type:Date,default:Date.now},
//     ispublished:Boolean,
//     rating:{type:Number,required:true}
// });
