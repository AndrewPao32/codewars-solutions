// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    //Sort array from smallest to largest
    args.sort(function(a, b){return a-b});
    //return index 0
    return args[0]
  }
}