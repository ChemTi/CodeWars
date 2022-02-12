function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("-1asdf3+"));

//const solution = str => [...str].reverse().join('')

/* function solution(str){
  var o = '';
  for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
} */

/* function solution(str){
  return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
} */

/* function solution(str){
  let n = ''
  for(let i of str){
    n = i+n
  }
  return n
} */