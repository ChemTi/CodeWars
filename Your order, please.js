/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */

function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));

/* var reg = /\d/;

function order(words){
  return words.split(' ').sort(comparator).join(' ');
}

function comparator(word, nextWord) {
  return +word.match(reg) - +nextWord.match(reg)
} */

/* function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
} */

/* function order(words) {
  return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
} */

/* function order(words){
  // ...
  return words && words.split(' ')
    .map(word => word.match(/\d/) + word)
    .sort()
    .map(word => word.slice(1))
    .join(' ');
} */

/* function order(str)
{
  str=str.split(" ");
  var index, result=new Array(str.length);
  for(var i in str)
  {
    index=str[i].match(/\d/);
    result[index-1]=str[i];
  }
  return result.join(" ");
} */

/* const order = w => w.split(' ').sort((a, b) => /\d/.exec(a) - /\d/.exec(b)).join(' '); */

/* function order(words) {
  return words.split(" ").sort((a, b) => a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "")).join(" ")
} */

/* function order(string){
  // ...
  return string.split(' ').reduce((acc,el,i) => {   
    acc[el.match(/\d/)-1]=el
    return acc;
  },[]).join(' ') 
} */

/* const order = words => words.split(' ').sort((a, b) => +/(\d+)/.exec(a)[0] - +/(\d+)/.exec(b)[0]).join(' '); */

/* function order(words){
  return words.length ? words.split(' ')
          .map(o => ({[o.match(/\d/g).join()]: o}))
          .sort((a, b) => Object.keys(a) > Object.keys(b))
          .reduce((acc, cur, i) => acc.concat(cur[i+1]), []).join(' ') : ''
} */

/* function order(words){
  words = words.split(' ');
  var num = '123456789'.split('');
  var output = [];
  for (var i = 0; i < words.length; i++) {
      for (var j = 0; j < words[i].length; j++) {
          if (num.indexOf(words[i][j]) > -1) {
              output[num.indexOf(words[i][j])] = words[i];
          }
       }
    } return output.join(' ');
} */

/* function order(words) {
  if (!words) return '';
  
  var result = words.split(' ').map(word => {
    var orderAsString = word.split('').filter(c => !isNaN(c))[0];
    var order = Number(orderAsString);
    
    return {
      "order": order,
      "word": word
    };
  });
  
  result.sort((a, b) => a.order - b.order);
  
  return result.map(x => x.word).join(' ');
} */

/* function order(words){
  var _ret = [];
  if(0 < words.length){
    words.split(" ").forEach(function(w){
      _ret[w.match(/\d/g)[0] - 1] = w;
    });
  }
  return _ret.join(" ");
} */