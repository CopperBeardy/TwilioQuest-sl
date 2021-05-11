class Ducktypium {
    constructor(color) {
        this.calibrationSequence = [];
      if(color == 'red' || color == 'blue' || color == 'yellow')
    {
        this.color = color;
    }else{
        throw color;
    }

    }

    refract(recolor)
    {
        if(recolor == 'red' || recolor == 'blue' || recolor == 'yellow')
        {
            if(recolor == this.color)
           {
               return this.color;
           }
        }

        if(recolor == 'red' && this.color == 'blue' || this.color == 'red' && recolor == 'blue' )
        {
            return 'purple';
        }
        else if(recolor == 'red' && this.color == 'yellow' || this.color == 'red' && recolor == 'yellow' )
        {
            return 'orange';
            
        }
        else if(recolor == 'yellow' && this.color == 'blue' || this.color == 'yellow' && recolor == 'blue' )
        {
            return 'green';
            
        }
        else
        {
            throw recolor;
        }
    
    }
  
    calibrate(numbers)
    {
        numbers.sort();
        for (let i = 0; i <numbers.length; i++) {
            numbers[i] = numbers[i] *3;   
        }
        this.calibrationSequence = numbers;
    }
    
   
    // your code here
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const dt = new Ducktypium('red');
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract('blue')); // prints 'purple'
  console.log(dt.refract('red')); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]