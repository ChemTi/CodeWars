/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] */

function openOrSenior(data){
	function determineMembership(member){
		return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
	  }
	  return data.map(determineMembership);
  }

  console.log([[45, 12],[55,21],[19, -2],[104, 20]]);

/* function openOrSenior(data){
  return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
} */


/* function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
} */


/* function openOrSenior(data){
  // Senior = 55+ and 7+
  var result = [];

  for(var i = 0; i < data.length; i++){
    result[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
  }

  return result;
} */

/* function openOrSenior(data){
  var result = [];
  data.forEach(function(member) {
    if(member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  })
  return result;
} */

/* const openOrSenior = data => {
  let getOpenOrSenior = [];
  for(i=0; i<data.length; i++){
    if(data[i][0]>=55 && data[i][1]>7){
      getOpenOrSenior.push("Senior");
    }else{
      getOpenOrSenior.push("Open");
    }
  }
  return getOpenOrSenior;
} */


/* function openOrSenior(data){
  var rez=[];
  for(var i=0;i<data.length;i++){
    if(data[i][0]>=55&&data[i][1]>7){rez.push("Senior");}else rez.push("Open");
  }
  return rez;
} */


/* const Category = {
  Open: 'Open',
  Senior: 'Senior',
}; */


/* function openOrSenior(data){
 return data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return Category.Senior;
    }

    return Category.Open;
 });
} */

/* function openOrSenior(data){
  var memlist= [];
  
   data.forEach(function (member){
      
    if (member[0] >= 55 && member[1] >7){
      memlist.push('Senior');
    }
    
    else {
      memlist.push('Open');
    }
    
   });   
   return memlist;
} */