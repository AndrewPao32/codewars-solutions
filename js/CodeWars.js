// 1. Given a number n, return the number of positive odd numbers below n, EASY!
function oddCount(n){
    return Math.ceil((n-1)/2)
}
// Best Practices Answers
const oddCount = n => Math.floor(n/2) 

function oddCount(n){
  return Math.floor(n/2);
}
