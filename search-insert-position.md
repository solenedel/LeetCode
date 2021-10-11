# Search Insert Position

### difficulty: easy

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 
## Solutions

### JavaScript

```
const searchInsert = function(nums, target) {
    
    for ( let i = 0; i < nums.length; i++ ) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] < target && nums[i + 1] > target ) {
            console.log('i + 1: ', i + 1);
            return (i + 1);
        } else if (i === nums.length - 1 && nums[i] < target) {
            return (i + 1);
        } else if (i === 0 && nums[i] > target){
            return 0;
        }
    }
    
};

```

NOTE: the complecity is O(n) for the above solution- too slow. 



