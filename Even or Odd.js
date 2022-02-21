/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

function even_or_odd(number) {
  if (Number.isInteger(number) == true) {
    return number % 2 == 0;
  } else {
    return undefined;
  }
}

console.log(even_or_odd(0));

/* function even_or_odd(number) {
  if (Number.isInteger(number) == true) {
    if (number % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
} */


/* function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
} */

/* const even_or_odd = n => (n % 2) ? 'Odd' : 'Even'; */

/* function even_or_odd(number) {
  return ( (number % 2) == 0 ) ? "Even" : "Odd";
} */

/* var even_or_odd = n => n & 1 ? 'Odd' : 'Even' */