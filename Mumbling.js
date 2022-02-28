/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

/* function accum(s) {
  let spl = s.split("");
  for (let i = 0; i < spl.length; i++) {
    const element = spl[i] * spl[i];
  }
  return element.join("-");
}

console.log(accum("absd")); */

function accum(s) {
    return s.split('').map((a, i) => (a.toUpperCase() + a.toLowerCase().repeat(i))).join('-');
}

console.log(accum("absd"));

/* function accum (s) {
  return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
} */

/* function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
} */

/* function accum(str) {
  var res = [];
  for(var i = 0; i < str.length; i++) {
    var row = '';
    for(var j = 0; j < i + 1; j++) {
      row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
    }
    res.push(row);
  }
  return res.join('-');
} */