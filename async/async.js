const fs=require('fs');

console.log("Before");

fs.readFile('f1.txt',function(err,data){
    if(err) return console.error(err);
    console.log('File data is'+data);
});

console.log("After");
