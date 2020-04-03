const argumentValue = process.argv[2];

if(argumentValue % 3 === 0 && argumentValue % 5 === 0){
    console.log("JavaScript");
}else if(argumentValue % 3 === 0){
    console.log("Java");
}else if(argumentValue % 5 ===0 ){
    console.log("Script");
}else{
    console.log(argumentValue);
}
