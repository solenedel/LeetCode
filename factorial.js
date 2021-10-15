
// iterative solution
const factorial = (num) => {
 
  let result = 1;
 
  if (num > 1) {
    for (let i = num; i >= 2; i--) {
    result *= i;
   }
  }
 
   return result; 
 };


const factorial = (num) => {

  if (num <= 1) return 1;

  let result = num;

  if (num >= 1) {
    result *= factorial(num - 1);
  }

  return result; 
};


//////// TEST ///////

console.log(factorial(3)); // 6 
console.log(factorial(9)); // 362880
console.log(factorial(1)); // 1
console.log(factorial(0)); // 1
console.log(factorial(8)); // 40320



