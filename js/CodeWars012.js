/* Complete the square sum function so that it squares each number passed into it and then sums the results together.



//Parameters: array of numbers

//Returns: return sum of the squares

//Examples:
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//Pseudo Code:
for each index, square it

add it to a sum


*/


function squareSum(numbers){
    
    let squares = ((numbers.map((e)=>(e**2))))
    const sum = squares.reduce(function (result, item) {
      return result + item;
    }, 0);
    console.log(sum)
}

squareSum([1,2])// 5
squareSum([0, 3, 4, 5]) // 50
squareSum([]) //0
