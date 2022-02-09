function spinWords(words){
    return words.split(' ').map(function (word) {
     return (word.length > 1) ? word.split('').reverse().join('') : word;
      }).join(' ');
}
console.log(spinWords("Hello World"));