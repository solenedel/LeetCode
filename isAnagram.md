# is Anagram

### difficulty: easy

Given two strings s and t, return true if t is an anagram of s, and false otherwise.



## Solutions

### JavaScript

```
const isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false;
    
    const sorted1 = s.split('').sort(); 
    const sorted2 = t.split('').sort();
    
    for(let i = 0, j = 0; i < sorted1.length, j < sorted2.length; i++, j++) {
        if (sorted1[i] !== sorted2[j]) {
            return false;
        }
    }
    return true;
};
```