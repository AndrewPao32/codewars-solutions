// Find the next perfect square!
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  nextNum = Math.sqrt(sq) + 1
  if (Math.floor(nextNum) === nextNum) {
    return nextNum ** 2} else {
  return -1;
    }
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))
