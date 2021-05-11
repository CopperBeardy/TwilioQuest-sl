function getFirstAmountSorted(inputArray,numberOfItems ){
    inputArray.sort();
   let outputArray = inputArray.splice(0,numberOfItems)
    return outputArray;
}


const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray); 