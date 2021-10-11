# Palindrom number

### difficulty: easy

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


## Solutions

### JavaScript

NOTE: not passing yet.

``` 
const longestCommonPrefix = function(strs) {
    let LCP = '';
    for (let i = 0; i < strs.length - 1; i++) {
        console.log(strs[i]);
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] === strs[i + 1][j]) {
               LCP += (strs[i][j]);
               // console.log(LCP);
            }
        }
    }
    if (LCP) return LCP;
    return '';
};
```
