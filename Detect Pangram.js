/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = [];
    string.toLowerCase().replace(/\w/g, (str) => {
      str.split('').reduce((acc, cur) => {
        return !result.includes(cur)
           && alphabet.includes(cur)
           && result.push(cur);
        }, '');
     });
    return alphabet.join('') === result.sort().join('');
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog."));
  console.log(isPangram("This is not a pangram."));
  
  /* function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("").every(function(x){
      return string.indexOf(x) !== -1;
  });
} */

/* function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
} */

/* function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
} */

/* function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
} */

/* function isPangram(string) {
  return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
} */

/* function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
} */

/* function isPangram(str){
 var alphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
      ];
      str=str.toLowerCase();
      for (var i = 0; i < alphabet.length; i++) {
          if (str.indexOf(alphabet[i])<0) {
            return false;
          }
      }
      return true
} */

/* function isPangram(string){
  const str = string.replace(/[^a-zA-Z]/gi,'').toLowerCase()
  const set = new Set([...str]);
  return set.size === 26;
} */

/* function isPangram(str) {
  letters: for (var c = 0; c < 26; c++) {
    for (var i = 0; i < str.length; i++) {
      var s = str.charCodeAt(i)
      if (s < 65 || s > 90 && s < 97 || s > 122) continue
      if (s === 65 + c || s === 97 + c) continue letters
    }
    
    return false
  }

  return true
} */