/*1.
Write a function compose() which can take any number of functions
and return a function which will run the given functions in order when called
with an argument.

NOTE: this exercise needs :
  1. currying
  2. reduce
  3. rest operator, as you dont know how many valuse can be passed to anyone.

EXAMPLE:
  const increment = num => num+1
  const square = num => num**2
  const incrementThenSquare = compose(increment(square))
  incrementThenSquare(2); 119
*/

// const compose = (...args) => {
//   let listOfFunctions = [...args];
//   console.log(listOfFunctions)
// }
/* TODO: SOLVE */