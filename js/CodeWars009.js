/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.



//Parameters: list of strings

//Returns: return an array formatted "n: string"

//Examples:
(Input -> Output)
number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

//Pseudo Code:
//For each array

//concatonate with index+1 then : then string

//return to array
  if (array.length === 0) {console.log(array)
  } else {array.forEach((element,index) => {console.log (`${index+1}: ${element}`)})
}
*/


var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}



number([])
number(["a", "b", "c"])
