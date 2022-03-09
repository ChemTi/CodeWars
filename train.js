function twoSum(numbers, target) {
  var tmp, hash = {};
  numbers.forEach(function(a, i){ hash[a] = i; })
  // for (var i = 0; i < numbers.length; i++){
  //   tmp = target - numbers[i];
  //   if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]]
  // }
  return hash
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([2, 5, 6], 11));