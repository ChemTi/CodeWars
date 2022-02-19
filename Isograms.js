/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; ++i) {
    for (let j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram(" "));

/* function isIsogram(str){
   var hash = {};
   str = str.toLowerCase();
   for (var i = 0; i < str.length; i++) {
	 if (hash[str[i]]) {
	   return false;
	 }
	 hash[str[i]] = true;
   }
   return true; 
} */

/* function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
} */

/* function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
} */

/* function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
} */

/* function isIsogram(str)  {
	str_lc = str.toLowerCase();
  	var letters = str_lc.split('');
  	var check4uniqueness = function(value, index, self) { 
  	return self.indexOf(value) === index;
  }
 	return letters.filter(check4uniqueness).length == str.length;
} */

/* function isIsogram (str) {
  return !str || (str.length === new Set(str.toLowerCase()).size);
} */

/* function isIsogram(str) {
  str = str.toLowerCase()
  
  for (var i = 0; i < str.length; i++) {
	if (str.indexOf(str.charAt(i), i + 1) >= 0) {
	  return false
	}
  }
  
  return true
} */

/* function isIsogram(str) {
  var map = {};
  var result = true;
  str.split('').forEach(function(char) {
	if (map[char.toUpperCase()] === undefined) {
	  map[char.toUpperCase()] = 1;
	} else {
	  result = false;
	}
  });
  return result;
} */

/* function isIsogram(str) {
  return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
} */
