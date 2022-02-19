/* We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999" */

function numberToString(num) {
  return num.toString();
}

console.log(numberToString(123));

/* function numberToString(num) {
  // Return a string of the number here!
  return String(num);
} */

/* function numberToString(num) {
  return "" + num;
} */

/* const numberToString = num => `${num}`; */

/* function numberToString(num) {
  // could just do: return num + ''; But THAT would be cheating
  var str = '',
      mult = num < 0 ? -1 : 1;
  num *= mult;

  do {
    str = String.fromCharCode(num % 10 + 48) + str;
    num = ~~(num / 10);
  } while (num > 0);
  
  if(mult < 0) str = "-" + str;
  return str;
} */
