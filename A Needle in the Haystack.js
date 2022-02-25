/* Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) 

should return "found the needle at position 5" (in COBOL "found the needle at position 6")*/

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

console.log(
  findNeedle([
    "hay",
    "junk",
    "hay",
    "hay",
    "moreJunk",
    "tim",
    "needle",
    "randomJunk",
  ])
);

/* const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`; */

/* function findNeedle(haystack) {
  var i = 0;
  while (i < haystack.length) {
    if (haystack[i] == 'needle') {
      return 'found the needle at position ' + i;
    }
    i++;  
  }
} */

/* function findNeedle(array) {
for (var i=0; i<array.length; i++){
  if (array[i] === 'needle')
    return 'found the needle at position ' + i;
}
  // your code here
} */

/* function findNeedle(haystack) {
  let item = null;
    const array1 = haystack;
    array1.forEach((currentValue, index) => {    
      if(currentValue ==='needle') {
        item = 'found the needle at position ' + String(index);
      }
    });
    return item;
  }; */

/* function findNeedle(q,q2='needle') {
  let a=q.findIndex(e=>e==q2);
 return(a>-1)?`found the ${q2} at position ${a}`:``;
} */

/* function findNeedle(x) {
  var y = 0;
  while (x[y] !== "needle") {
    y++;
  }
      return ("found the needle at position " + y);
} */