const fs=require('fs');

console.log("Before");

// let data = fs.readFileSync('f1.txt');

// console.log('File data is'+data.toString());

fs.readFile('f1.txt',function(err,data){
    if(err) return console.error(err);
    console.log('File data is'+data);
});


//serial execution

fs.readFile('f1.txt',function(err,data){
    if(err) return console.error(err);
    console.log('File data is '+data);
    fs.readFile('f2.txt',function(err,data){
        if(err) return console.error(err);
        console.log('File data is '+data);
        fs.readFile('f3.txt',function(err,data){
            if(err) return console.error(err);
            console.log('File data is '+data);
        });
    });
});



console.log("After");
