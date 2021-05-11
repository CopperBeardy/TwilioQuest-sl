function addFirstToLast(inv)
{
    let firstAnLast = '';
 
    if(inv.length > 0){
     firstAnLast =  inv[0] +  inv[inv.length-1];
    }
 
return firstAnLast;
} 

console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));
