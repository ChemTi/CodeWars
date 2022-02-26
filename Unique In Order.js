/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

var uniqueInOrder = function (iterable) {
  let strArr = Array.isArray(iterable) ? iterable : iterable.split("");
  let unique = strArr.filter((letter, i) => {
    return strArr[i] != strArr[i + 1];
  });

  return unique;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

/* function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
} */

/* var uniqueInOrder=function(iterable){
   return [...iterable].filter((a, i) => a !== iterable[i-1])
} */

/* var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
} */


