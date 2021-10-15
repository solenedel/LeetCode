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

time complexity: O(n)
space complexity: O(1)



## Recursive solution

```
const factorial = (num) => {

  if (num <= 1) return 1;

  let result = num;

  if (num >= 1) {
    result *= factorial(num - 1);
  }

  return result; 
};
```

time complexity: O(n) 
space complexity: O(n)


### Notes
- Although the iterative and recursive solutions have O(n) time complexity, the recursive solution will take longer due to the number of function calls. 