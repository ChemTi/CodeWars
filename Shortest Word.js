/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s) {
    return s.split(" ").reduce((shortest, current) => current.length < shortest ? current.length : shortest, s.length);
  }

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); //3
console.log(findShort("Let's travel abroad shall we")); //2

/* function findShort(s){
    const spl = s.split(' ');
    let short = spl[0];
    for (let i = 0; i < spl.length; i++) {
        if (spl[i].length < short.length) {
            short = spl[i];
        }
    }
    return short.length;
} */

/* function findShort(s) {
  let short = s.split(" ").sort((a, b) => a.length - b.length);
  return short[0].length;
} */

/* function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
} */

/* function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
} */

/* const findShort = (s) => s.split(' ').sort((a, b) => b.length - a.length).pop().length; */

/* function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
} */

/* function findShort(s){
  return Math.min(...s.split(/\s/).map((w) => w.length));
} */