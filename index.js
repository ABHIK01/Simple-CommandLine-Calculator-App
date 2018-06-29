const yargs = require("yargs");

var argv = yargs.argv;
var command = argv._[0];
console.log(`The command is ${command}`);
 //console.log(argv.a);
    //console.log(argv.b);
if(command === "add" || command === "sum") {
    if(typeof argv.a === "number" && typeof argv.b === "number") {
        console.log(`The result of ${argv.a}  + ${argv.b} is`,argv.a + argv.b);

    } else  {

    console.log("Give proper input");
   
    }
}else if(command === "minus" || command == "subtract") {
    if(typeof argv.a === "number" && typeof argv.b === "number") {
        console.log(`The result of ${argv.a} - ${argv.b} is`,argv.a - argv.b);
    } else {
        console.log("Give proper input");
    }
    
}  else if(command === "multiply" || command === "product") {
    if(typeof argv.a === "number" && typeof argv.b === "number") {
        console.log(`The result of ${argv.a} * ${argv.b} is`,argv.a * argv.b);
    } else {
        console.log("Give proper input");
    }
    
} else if(command === "division" || command === "quotient") {
    if(typeof argv.a === "number" && typeof argv.b === "number") {
        console.log(`The result of ${argv.a} and ${argv.b} is`,argv.a / argv.b);
    } else {
        console.log("Give proper input");
    }
    

} else {
    console.log(`${command}  command not found`);
}
 
         
//You need to type node filename.js --a=number  --b=number
