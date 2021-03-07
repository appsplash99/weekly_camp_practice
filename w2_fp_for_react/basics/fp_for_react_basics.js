/* FUNCTIONAL PROGRAMMING FOR REACT */

/* HOW TO DO FUNCTIONAL PROGRAMMING */

/* ### 1. IMMUTABILITY ### */
/*1. 
Take an object with your Mother's Name and Your age.
Now create an object for sibling reference. */
// let obj = {
//   'mom': 'MyMoMName',
//   'myAge': 23
// }
// let newObj = {...obj, myAge: obj.myAge-20}
// console.log(obj, newObj, obj===newObj)

/*2.
Take an array with 5 colors.
Create another array by adding two more colors to it.*/
// let colors = ['red', 'blue', 'green', 'orange', 'pink'];
// let newColors = [...colors, 'cyan', 'magenta']
// console.log(colors===newColors)


/* ### 2. PURE FUNCTIONS ### */
/*1.
Write a function birthday(),
to take a person's name and age in an object and increase age*/
// const birthday = (obj) => ({...obj, age: obj.age+5})
// console.log(birthday({name: 'Apps', age:25}))


/*### 3. HIGHER ORDER FUNCTIONS ###*/

/* USE CASE OF ARRAY.fiter()*/
/*1. 
Write a function to tell whether a number is less than 10 or not.
Supply this function with Array.filter() to get an array with no 10 in it.*/
// const arr1 = [1, 2, 50, 10, 15];
// const numLessThanTen = (num) => num < 10
// const newArr = (arr) => arr.filter(numLessThanTen)   // filter accepts a callback function
// console.log(newArr(arr1))


/* USE CASE OF ARRAY.map()*/
/*2.
Given an Array of numbers return an object for each*/
// const arr2 = [1, 2, 50, 10, 15];
// const itemToObj = (item) => ({'num': item})
// const newArr = (arr) => arr.map(i => itemToObj(i))
// console.log(newArr(arr2))


/* USE CASE OF ARRAY.reduce()*/
/*3.
Given An Array of numbers, calculate the sum*/
// const arr3 = [5, 10, 48, 66, 85];
// const adder = (accumulator, currVal) => accumulator + currVal
// const sumOfArr = (arr) => arr.reduce(adder)
// console.log(sumOfArr(arr3))