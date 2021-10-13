# Fizz Buzz

### difficulty: easy

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. 


## Solutions

### JavaScript

Solution A
```
const fizzBuzz = (n) => {
    
    const stringArray = [];
    
    for (let i = 1; i < n + 1; i++) {
        
      if (i % 3 === 0 && i % 5 === 0 ) {
          stringArray.push('FizzBuzz');
      } else if (i % 3 === 0) {
          stringArray.push('Fizz');
      } else if (i % 5 === 0) {
          stringArray.push('Buzz');
      } else {
          stringArray.push(i.toString());
      }
    }
    return stringArray;
};
```

Solution B (same logic as A, simplified)
```
const fizzBuzz = (n) => {
    
    const stringArray = [];
    
    for (let i = 1; i <= n; i++) {
        
      if (!(i % 3) && !(i % 5)) stringArray.push('FizzBuzz');
      else if (!(i % 3)) stringArray.push('Fizz');
      else if (!(i % 5)) stringArray.push('Buzz');
      else stringArray.push(i.toString());
        
    }
    return stringArray;
};
```
NOTES: 
- zero is falsy, so  if `x % y === 0` is true, then `x % y` is falsy and so `!(x % y)` is truthy. 

