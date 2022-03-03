/* Given an array of integers, return a new array with each value doubled.
For example:

[1, 2, 3] --> [2, 4, 6] */

function maps(x) {
  return x.map((number) => number * 2);
}

console.log(maps([2, 4, 6]))

/*function maps(x) {
  return x.map(function(num) {return num * 2} )
}*/

/*  */