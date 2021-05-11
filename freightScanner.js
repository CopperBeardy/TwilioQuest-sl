function scan(items){
    let contrabandCount = 0;
    items.forEach(element => {
        if(element == "contraband"){
            contrabandCount++;
        }
    });
    return contrabandCount;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems); // should be 2