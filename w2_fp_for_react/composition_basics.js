/*
What is Composition?
  let f(x) and g(x) be two functions such that:
  output of f(x) should go into g(x)
  which is g(f(x)).
*/

let add = (a, b) => a + b
let square = num => num**2 

console.log(square(add(5, 6)))
// → 121 (square of addition of 5 and 6)

console.log(add(square(3), square(2)))
// → 13 (asum of two squares)
