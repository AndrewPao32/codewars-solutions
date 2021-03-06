/* Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

Examples 
Notes
You may consider that there will 


//Parameters: Not be any empty arrays/vectors.
//Returns: Return min and return max
//Examples:
(Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

//Pseudo Code:


*/

var min = function min (list){
  list.sort((a, b) => a - b)
  return list[0];
}

var max = function max (list){
  list.sort((a, b) => a - b).reverse()
  return list[0];
}


console.log(min([4,6,2,1,9,63,-134,566]))
console.log(max([4,6,2,1,9,63,-134,566]))
console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([-52, 56, 30, 29, -54, 0, -110]))
console.log(min([42, 54, 65, 87, 0] ))
console.log(max([42, 54, 65, 87, 0] ))
console.log(min([5]))
console.log(max([5]))