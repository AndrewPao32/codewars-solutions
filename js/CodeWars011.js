/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?


Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


//Parameters: single number input

//Returns: return positive number

//Examples:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

//Pseudo Code:
-if equal or greater than 0 return as is
-if less than 0 return absolute value


*/


function makeNegative(num) {
  if (num <= 0){return num}
  else {return -num}}



console.log(makeNegative(1));    // return -1
console.log(makeNegative(-5));   // return -5
console.log(makeNegative(0));    // return 0
console.log(makeNegative(0.12)); // return -0.12
