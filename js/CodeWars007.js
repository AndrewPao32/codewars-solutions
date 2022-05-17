/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.




//Parameters: String
//Returns: Return as a string, case-sensitive
//Examples:
Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

//Pseudo Code:
//split string
//loop each letter and double it
//join string
//return

*/

function doubleChar(str) {
  let newStr = ""
  //loop each letter and double it
    for (let i=0; i<str.length; i++){
      
      newStr = newStr+ str[i]+str[i]
   
    }

  //return
  return newStr
}



console.log(doubleChar("String"))
console.log(doubleChar("Hello World"))
console.log(doubleChar( "1234!_ "))