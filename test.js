let name="khushal";

//console.log(window.name);  //error

//console.log(global.name); //undefined

/*modularity in nodejs
variable and function will only be available in the file in which they are defined
*/

// to import something else in the file we use require function

const calculator=require("./calculator.js");

calculator.addition(5,6);
calculator.substraction(5,6);
calculator.multiplication(5,6);
calculator.division(5,6);
