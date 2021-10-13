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
    
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true;
};
```
