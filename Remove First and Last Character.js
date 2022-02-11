/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("и1234Й"));

/* function removeChar(str){
    return str.substring(1, str.length-1);
}; */

/* function removeChar(str) {
  //You got this!
    str1 = str.split("");
    str1.shift();
    str1.pop();
    return str1.join("");
} */

/* const removeChar = (str) => str.replace(/^.|.$/g, ''); */

/* const removeChar = (str) => str.replace(/^\w|\w$/g, '') */

/* function removeChar(str){
 //You got this!
    var input_str = str;
    var output_str = '';

    for (var i = 1; i < input_str.length-1; i++) {
    output_str += input_str[i];
    }

return output_str;
}; */
