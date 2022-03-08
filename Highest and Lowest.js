/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

function highAndLow(numbers) {
  let spl = numbers.split(" ");
  let max = Math.max.apply(null, spl);
  let min = Math.min.apply(null, spl);
  return `${max} ${min}` ;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

/* function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
} */

/* function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
} */

/* function highAndLow(numbers){
  var arr = numbers.split(' ').sort(function(a, b) { return a - b });
  return arr[arr.length -1] + ' ' + arr[0];
} */

/* unction highAndLow(numbers){

var numArray = numbers.split(" ");
var max      = Number(numArray[0]);
var min      = Number(numArray[0]);
var num;

for(var i = 1; i< numArray.length; i++){

  num = Number(numArray[i]);
  
  if(num > max) max = num;
  if(num < min) min = num;
}

return max + " " + min;

} */

/* function highAndLow(numbers) {
  var low, high, data = numbers.split(" ");
  for (var i = 0, length = data.length; i < length; i++) {
    var num = +data[i];
    if (low === undefined || num < low) low = num;
    if (high === undefined || num > high) high = num;
  }
  return high + " " + low;
} */

/* function highAndLow(numbers){
  var arr = numbers.split(" ").map( (x) => parseInt(x) );
  var max = arr.reduce((p, c) => p > c ? p : c );
  var min = arr.reduce((p, c) => p < c ? p : c );
  return max+" "+min;
} */

/* function highAndLow(numbers){
return Math.max.apply(null, numbers.match(/-?\d+/g)) + " " + Math.min.apply(null, numbers.match(/-?\d+/g));
} */