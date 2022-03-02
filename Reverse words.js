/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {

	return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(reverseWords("This is an example!"));

/* function reverseWords(str) {
  return str.split(' ').map(function(word){
	return word.split('').reverse().join('');
  }).join(' ');
} */

/* var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``) */

/* function reverseWords(str) {
  let reversedWord = '';
  let reversedStr = '';
  for (let i = 0; i < str.length; i++) {
	if (str[i] !== ' ') {
	  reversedWord = str[i] + reversedWord;
	} else {
	  reversedStr += reversedWord + ' ';
	  reversedWord = '';
	}
  }
  return reversedStr + reversedWord;
} */

/* function reverseWords(str) {
  var l = ''
  var s = ''
  var a = []
  for (let s = str.length; s>=0; s--){
	if (str[s-1]===' '){
	  a.push(l)
	  a.push(' ')
	  l=''
	  if (str[s-2]===''){
		a.push(' ')
		s--
	  }
	} else {
	  if (s === 0) {
		a.push(l)
	  } else {
		l += str[s-1]
	  }
	}
  }
  for (let i = a.length; i > 0; i--){
	s += a[i-1]
  }
  return s
} */

/* function reverseWords(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
	newStr += str[i];
  }
  return newStr.split(" ").reverse().join(" ");
} */