function scan(items){
    let indexs = [];
    items.forEach((element,index) => {
        if(element == "contraband"){
            indexs.push(index);
        }
    });

   
    return indexs;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems); // should be 2