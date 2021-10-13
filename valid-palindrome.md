# Valid palindrome

### difficulty: easy

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.


## Solutions

### JavaScript

Solution A:
```
const isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return s === s.split('').reverse().join('');
};
```

Solution B: 
```
const isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return s === s.split('').reverse().join('');
};
```
