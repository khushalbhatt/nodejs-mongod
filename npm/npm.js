// to check the version of npm
// npm --version or npm -v

//we have to create a package.json file for using npm

//to create a package.json file
//npm init
//it will ask some questions
//after that it will create a package.json file

//to install a package
//npm install <package name>
//npm i <package name>

//to install a package globally
//npm install -g <package name>
//npm i -g <package name>

//example figlet
//npm i figlet
 
const figlet=require("figlet");

//to use figlet
figlet.text("khushal",function(err,data){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data);
});
