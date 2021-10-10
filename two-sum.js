/* 

TWO SUM 

difficulty: easy

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order. 

EXAMPLE 1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

EXAMPLE 2
Input: nums = [3,2,4], target = 6
Output: [1,2]

EXAMPLE 3
Input: nums = [3,3], target = 6
Output: [0,1]


*/

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
          return [i, j];
      } 
    }
  }
};


/* 
ACCEPTED
Runtime: 103 ms
complexity: O(n^2)

use hash map for ideal solution. 
*/

