function highAndLow(numbers) {
  let spl = numbers.split(" ");
  return Math.max.apply(null, spl) + " " + Math.min.apply(null, spl);
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
