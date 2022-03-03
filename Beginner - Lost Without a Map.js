/* Given an array of integers, return a new array with each value doubled.
For example:

[1, 2, 3] --> [2, 4, 6] */

function maps(x) {
  return x.map((number) => number * 2);
}

console.log(maps([2, 4, 6]));

/* function maps(x) {
  return x.map(function(num) {return num * 2} )
}*/

/* function maps(x) {
  const newarr = [];
  for (let i = 0; i <= x.length - 1; i++) {
    newarr[i] = x[i] * 2;
  }
  return newarr;
}*/

/* function maps(x){
  var newArr = [];
  x.map(function(y){
    newArr.push(y*2);
});
return newArr;
} */

/* function maps(x){
let arr = [];
for(let i = 0; i < x.length; i++){
arr.push(x[i] * 2);
}
return arr;
} */

/* maps  =ᅟ =ᅠ =>ᅠ !=  +  [  ]  ?  [ ᅠ[  +  [  ]  ]  + ᅠ[  +  [  ]  ]  ,  ... ᅟ( ᅠ.  slice  (  !  +  [  ]  )  )  ]  :  [  ] */

/* function maps(x){
  return x.length ? x.map((el) => el*2) : false    ;
} */

/* function maps(x) {
  x.forEach(myFunction);
  function myFunction(item, index, arr) {
    arr[index] = item * 2;
  }
  return x;
} */