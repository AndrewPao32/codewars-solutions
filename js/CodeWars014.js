/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//Parameters: Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

//Returns: Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

//Examples:
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//Pseudo Code:
foreach array
conditional if index 1 > 55 && index 2 > 7 then return Senior, else return Open
push the return on to new array



*/


function openOrSenior(data){
  let result = []
  //foreach array
    for (let i=0; i<data.length; i++){
  //conditional if index 1 > 55 && index 2 > 7 then return Senior, else return Open
  if (data[i][0] >= 55 && data[i][1] > 7){ result.push('Senior')}
  else{result.push('Open')}
  //push the return on to new array
    }
    console.log(result)
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) //['Open', 'Senior', 'Open', 'Senior'])
openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])//['Open', 'Open', 'Open', 'Open'])
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])//['Senior', 'Open', 'Open', 'Open'])