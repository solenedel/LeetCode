# Contains duplicate

### difficulty: easy


Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


## Solutions

### JavaScript

```
const containsDuplicate = function(nums) {
    let hashMap = {};
    
    for (const num of nums) {        
        if (hashMap[num] === 1) {
            return true;
        } else {
            hashMap[num] = 1;
        } 
    }
     return false;
}
```

