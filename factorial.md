# factorial function

Factorial is defined for non-negative integers only.

### Javascript



## Iterative solution

```
const factorial = (num) => {
 
  let result = 1;
 
  if (num > 1) {
    for (let i = num; i >= 2; i--) {
    result *= i;
   }
  }
 
  return result; 
 };
```



## Recursive solution
