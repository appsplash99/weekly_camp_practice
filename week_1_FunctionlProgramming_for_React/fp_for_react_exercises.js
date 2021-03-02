/*
#################################################
#################################################
### RULES:                                    ###
###  1. Use Pure Functions                    ###
###  2. Create Functions Seperately for Reuse ###
#################################################
#################################################  
*/

/*
###########################
### INTERVIEW QUESTIONS ### 
###########################
*/
/*1.
Write your own filter, map, reduce */

/*2.
PolyFill the Array Methods*/


/*
#############################
### FP FOR REACT PROBLEMS ### 
#############################
*/

/*  
---------------------------
|  I - ARRAY OF INTEGERS  | 
---------------------------    
*/
/*1.
Given an Array of Integers,
Find the sum of all odd numbers.*/
// Approach: Appling an Odd filter on the array
/* CODE SOLUTION */
// const arr1 = [1, 2, 3, 4, 5, 6]
// const isOdd = (number) => number%2!==0
// const newArr = (arr) => arr.filter(isOdd)
// console.log(newArr(arr1))


/*2.
Given an Array of Integers,
Find the sum of all numbers at odd indices.*/
/*Approach: 
  at odd indices means → filtering;
  sum of all means → reducing*/
/* CODE SOLUTION */
// const arr2 = [0, 1, 22, 3, 44, 5, 66]
// // docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntax 
// // according to docs - callback accepts three arguments: currentValue, index(oprional), array(optional)
// // Callback to Filter odd-Indexed Values of an array
// const isOddIndex = (value, index) => index % 2 !== 0 
// // returning odd indexed array items
// const oddArr = (arr) => arr.filter(isOddIndex) // returns [ 1, 3, 5 ]
// // callback to sum all the array elements
// const adder = (accumulator, currVal) => accumulator + currVal
// // returning the final sum via reduce
// const totalSum = (arr) => arr.reduce(adder, 0) // returns 9
// console.log(totalSum(oddArr(arr2)))


/*3.
Given an array of integers,
Find the biggest number in array.*/
/*Approach: 
  biggest number means → comparing each number to find the biggest number(ie one single value) */
//docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#parameters
/* CODE SOLUTION */
// const arr3 = [5, 66, 848, 75, 20];
// // callback to get biggest number from two numbers
// // docs - callback will be invoked N times - where N is the size of array,
// // with each time prevVal as the return value from previous callback.
// const biggerFromTwoNums = (prevVal, currVal) => prevVal>currVal ? prevVal : currVal
// // returning biggest number via reduce
// const biggest = (arr) => arr.reduce(biggerFromTwoNums)
// // function call
// console.log(biggest(arr3))


/*4.
Given an Array of Integers,
Find the numbers divisible by 10 */
/*Approach:
  filtering all elements with divisibility of 10 */
/* CODE SOLUTION */
// const arr4 = [55, 60, 800, 754, 0, 66, 3];
// const divisibleBy10 = (num) => num%10===0
// const newArr = (arr) => arr.filter(divisibleBy10)
// console.log(newArr(arr4))


/*5.
Given an Array of Integers,
Return an Array of numbers where,
odd numbers are incremented by one and
even numbers are decremented by one*/
/*Approach: 
  iterating over all values and 
  performing operations on values based on index
  → Array.map()
*/
/* CODE SOLUTION */
// const arr5 = [4, 86, 754, 3, 12, 21, 89]
// const changeValueAtIndex = (value, index) => index%2!==0 ? value+1 : value-1
// const newArr = (arr) => arr.map(changeValueAtIndex)
// console.log(newArr(arr5))


/*6.
Given an Array of Integers,
Return an object with sum of all 
odd numbers and even numbes seperately.
*/
/*Approach: 
  filter all values as odd and even → Array.filter()
  return object with sum of oddNumbers and evenNumbers seperately → Array.reduce()
  Final Object to return:
  {
    'odd' : sumOfAllOddElements ,
    'even': sumOfAllEvenElments
  }
*/
/* CODE SOLUTION */
// const arr6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const isOdd = num => num%2!==0
// const isEven = num => num%2===0
// const oddArr = (arr) => arr.filter(isOdd)
// const evenArr = (arr) => arr.filter(isEven)
// const adder = (accumulator, currValue) => accumulator + currValue
// const totalSum = (arr) => arr.reduce(adder)
// const newObj = (arr) => ({
//   'even': totalSum(evenArr(arr)),
//   'odd' : totalSum(oddArr(arr))
// })
// console.log(newObj(arr6))



/*  
---------------------------
|  II - ARRAY OF STRINGS  | 
---------------------------   
*/

/*1.
Given an Array of Strings,
Find the number of strings with similar number of characters.
Example:
const input = ['apple', 'orange', 'mango', 'papaya']
// → output: { 5:2, 6:2 }
*/
/* Approach:
    iterating over each item to get the strLength,
    use Array.reduce() to extract the number of counts to form an object
    final return :
      {
        strCount : numberOfStrings with length equal to strCount
      }
*/
/* CODE SOLUTION */
// const arrS1 = ['apple', 'orange', 'mango', 'papaya'];
// const strLen = word => word.length
// // const 
// /*docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#counting_instances_of_values_in_an_object */
// // callback to return object
// const instanceCounter = (accumulatorObj, item) => {
//   if (strLen(item) in accumulatorObj) {
//     accumulatorObj[strLen(item)]++
//   } else {
//     accumulatorObj[strLen(item)]=1
//   }
//   return accumulatorObj
// }
// const countOccurences = (arr) => arr.reduce(instanceCounter, {})
// console.log(countOccurences(arrS1))


/*2.
Given an Array of Strings,
return an array with strings which have vowels.*/
/*Approach:
  filtering all words for vowel presence → Array.filter()
*/
/* CODE SOLUTION */
// const arrS2 = ['aaa', 'bbb', 'abab', 'xyz', 'aeiou','i' ,'c', 'zzz']
// const isVowel = (letter) => ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1
// const wordHasVowel = (wordStr) => wordStr.split('').filter(isVowel).length>0  // returns true if non-empty array
// const arrOfVowelWords = (arr) => arr.filter(wordHasVowel)
// console.log(arrOfVowelWords(arrS2))


/*3.
Given an array of strings,
return an array of objects - 
with key as item and value as number of characters in the string.*/
/*  Approach:

    final return:
      {
        'I': 1,
        'love': 4,
        'JS': 2,
      }
*/
/* CODE SOLUTION */
// const arrS3 = ['I', 'love', 'JavaScript', 'and', 'Python']
// const strLen = str => str.length
// /*docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#counting_instances_of_values_in_an_object */
// via docs - call back to form a key:value pair for each entry of the array
// const callbackReduceItemToObj = (accumulatorObj, item) => {
//   accumulatorObj[item]=strLen(item)
//   return accumulatorObj
// }
// const reduceArrToObj = arr => arr.reduce(callbackReduceItemToObj, {})  // {} is initial value for callback
// console.log(reduceArrToObj(arrS3))