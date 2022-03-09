/* Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2) */

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return i +" "+ j;
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([2, 5, 6], 11));

/* function twoSum(numbers, target) {
  var tmp, hash = {};
  numbers.forEach(function(a, i){ hash[a] = i; })
  
  for (var i = 0; i < numbers.length; i++){
    tmp = target - numbers[i];
    if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]]
  }
} */

/* for (var i = 0; i < numbers.length; i++){
    tmp = target - numbers[i];
    if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]]
  }
} */

/* function twoSum(nums,target){
  const arr = [];
  nums.map(function(x,ind1){
    nums.map(function(y,ind2){
      if(x + y == target && ind1 != ind2)
      arr.push(ind1,ind2)
    });
  });
  return [arr[0],arr[1]]
} */

/* const twoSum = (n, t) => n.reduce((acc, curr, idx) => {
  let result = n.indexOf(t - curr, idx + 1);
  if (result >= 0) acc.push(idx, result);
  return acc;
}, []); */

/* twoSum=(n,t,r)=>[r=n.indexOf(n.filter(u=>n.includes(t-u))[0]),n.lastIndexOf(t-n[r])] */

/* const twoSum = (numbers, target, idx1 = 0) =>
  (idx2 => ~idx2 ? [idx1, idx2] : twoSum(numbers, target, ++idx1))
  (numbers.indexOf(target - numbers[idx1], idx1 + 1)); */

/* const twoSum = function (numbers, target){
  const map = {};
  for (let p = 0; p < numbers.length; p++){
    const currMapVal = map[numbers[p]]
     if (currMapVal >= 0){
       return [currMapVal, p]
     } else {
       const numToFind = target - numbers[p]
       map[numToFind] = p
     }
   }
  return null
} */