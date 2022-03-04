/* You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  const reducer = (accumulator, current) =>
    accumulator + (current > 0 ? current : 0);
  return arr.reduce(reducer, 0);
}

console.log(positiveSum([1, -4, 7, 12])); //20
console.log(positiveSum([1, -2, 3, 4, 5])); //13
console.log(positiveSum([])); //0
console.log(positiveSum([-1, -2, -3, -4, -5])); //0
console.log(positiveSum([-1, 2, 3, 4, -5])); //9

/* function positiveSum(arr) {
  function checkNegative(sum, current) {
    return sum + (current > 0 ? current : 0);
  }
  return arr.reduce(checkNegative, 0);
} */

/* function positiveSum(arr) {
    let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          sum = sum + arr[i];
      } 
  }
  return sum
} */

/* function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
} */

/* function positiveSum( obj ) {
  return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
} */

/* function positiveSum(arr) {
  var sum = 0;
  arr.forEach(function(v,i,a) {
    if(v>0){sum+=v;}
  });
  return sum;
} */

/* function positiveSum(arr) {
  return arr.length != 0 ? arr.reduce(function (a,b){ return a > 0 && b > 0 ? a + b : a >= 0 && b < 0 ? a + 0 : b >= 0 && a < 0 ? b + 0 : 0}) : 0;
} */