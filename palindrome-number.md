# Palindrome number

### difficulty: easy

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.


## Solutions

### JavaScript

```
const isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('');
};
```

TO DO: 

A better solution is to bypass converting the number into a string and use the modulus operator.



