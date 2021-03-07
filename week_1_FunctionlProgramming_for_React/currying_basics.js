/*
Currying Function Definition: 
  A unary function(ie, a function taking a single parameter),
  which returns another function.

WHY?
  beacuse there is no concept of global variable,
  hence you need to lock the first value(nowValue) in another function 
  (addLaterSecondPart in this case) to be consumed later,
  when you get the laterValue.
*/

/* #### CURRYING FUNCTION SYNTAX: via NORMAL FUNCTION #### */
function addLater (nowValue) {
  return function addLaterSecondPart(laterValue) {
    return nowValue + laterValue
  }
}
// FUNCTION CALLS
let aa = addLater(2) 
// aa contains a function(addLaterSecondPart) returned from addLater
// with nowValue=2 in Closure Scope of addLaterSecondPart
// console.dir(aa) // → function addLaterSecondPart

let bb = aa(5)
// now bb contains a value(7, sum of 2+5) which is returned from
// addLaterSecondPart present in the variable aa
// console.log(bb) // → 7

let cc = addLater(1)(2)
// we can also call the currying function
// console.log(cc) // → 3


/*#### CURRYING FUNCTION SYNTAX: via ES6 ARROW FUNCTION #### */
const arrowAddLater = nowValue => laterValue => nowValue+laterValue
/*    *-₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋-*   *-₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋-*
                 ↓                                    ↓
       _-⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻-_    _-⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻-_
      |    FIRST FUNCTION     |  |             SECOND FUNCTION               |
      |          ↓            |  |                    ↓                      |
      | Colsure scope: nothing|  | Colsure: nowValue from previous call      |
      | parameter: nowValue   |  | parameters: laterValue                    |
      | return: function      |  | return: value(nowValue + laterValue)      |
      *-₋___________________₋-*  *-₋_______________________________________₋-*
*/


/* ### EXERCISES ### */
/*1.
Create afunction which takes your name and 
returns a function which would add your name to anything that function says.
Example:
  const giveYourName() {...}
  const ApurvSays = giveYourName('Apurv')
  ApurvSays('Hello')
  // → "Apurv Says, 'Hello' "
*/
/*CODE*/
const giveYourName = name => apurvSays = (statement) => `${name} says, ${statement}`
console.log(giveYourName('Apurv')('Hi'))

