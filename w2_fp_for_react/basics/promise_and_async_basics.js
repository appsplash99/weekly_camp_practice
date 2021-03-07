/*
######################################
### PROMISES & ASYNC JS API BASICS ###
######################################
*/


/*
## ex2: write your own function which takes a callback

### challenge
Write a function `strLength()` which takes 
1. Your name
2. A function which it will call with the length of your name

Now, call this function with the two parameters. 
	1. Your name. This is simple.
	2. A function. This function will get the length of the string. 
   	 Use that length to print a message: `OMG! my name is X char long!`*/
/* SOLUTION */
// const strLength = (name, lengthCallBack) => {
//   const nameLen = name.length
//   lengthCallBack(nameLen)
// }
// strLength(
//   'Apps', 
//   (nameLen)=>{console.log(`OMG! my name - is ${nameLen} char long!`)} 
// )


/*
## ex3: function which takes two callbacks

### challenge
Write a function `willThanosKillMe()` . This function will take three parameters

1. Your name
2. Function to call if Thanos doesn't kill you.
3. Function to call if Thanos does kill you.

This function will call success callback if your name has even characters. You won't die. 

But if your name has odd number of characters then you're going to die. Sorry! :( 

Now, call this function with given parameters. The success function should console a happy message: `Yay! I am alive!` and the failure function should console your will: `Give my bose speakers and headphones to my sister`*/
/* SOLUTION */
// const willThanosKillMe = (name, successCb, failureCb) => {
//   const willKill = name.length;
//   return willKill%2===0 ? successCb() : failureCb()
// }
// willThanosKillMe(
//   'Raju', 
//   ()=> console.log(`${}, Yay! I am alive!`),
//   () => console.log(`Give my bose speakers and headphones to my sister`)
// )


/*
## ex4: use setTimeOut()

### challenge
- Learn how to use `setTimeout()`
- Now, write a function which takes a message and a delay and print that message after the delay.

### understanding
`setTimeout()` places the callback function on event queue after the given time. 

Note: 
event queue sends the function to call stack,
only when the following conditions are satisfied:
   1. when call stack is empty
   2. when event queue.length > 0

### remember
- It doesn't guarantee time
- `setTimeout(fn, 0)` is used to do calculation when callstack is empty. Therefore not blocking the render.*/
/* SOLUTION */
/* Using setTimeout */
// const printName = () => console.log('Apps Splash')
// setTimeout(printName, 2000)
// const printAfterDelay = (msg, delay) => {
//   setTimeout(() => console.log(msg), delay)
// }
// printAfterDelay('cool', 3000)

/*
## ex5: predict outputs

### 1.
```jsx
setTimeout(() => console.log(A), 0);
setTimeout(() => console.log(C), 0);
setTimeout(() => console.log(B), 0);
```
### 2.
```jsx
setTimeout(() => console.log("A", 1000);
setTimeout(() => console.log("B", 400);
setTimeout(() => console.log("C", 1300);
```
### 3.
```jsx
console.log("A");
setTimeout(() => console.log("B", 0);
console.log("C");
``` */
/* SOLUTIONS:
1. ACB
2. BAC
3. ACB
*/

/*
##############
## PROMISES ##
##############
*/

/*Why Promises() over CallBacks()?

// Promises have Easy to follow code and
// avoid callback hell created by callback functions's syntax

getA(getB(getC))

getA(){
doX();
doY()
getB(data => {
		doOne();
		doTwo();
		getC(cData => {
				doEleven()
				doTwelve();
			}
		}
} */


/* ex10: understand promise constructor - fakeFetch 
	returns a promise object	*/
/* SOLUTION */
// const fakeFetch = (msg, shouldReject) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (shouldReject) {
// 				reject(`error from server: ${msg}`)
// 			}
// 			resolve(`from server ${msg}`);
// 		}, 3000)
// 	})
// }


/* ex11: print data on success */
/* SOLUTION */
// const fakeFetch = (msg, shouldReject) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (shouldReject) {
// 				reject(`error from server: ${msg}`)
// 			}
// 			resolve(`from server ${msg}`);
// 		}, 3000)
// 	})
// }
// fakeFetch('Apps')
// 	.then(data => console.log(data))


/* ex12: print data on success, print error on failure 
	Call `fakeFetch(msg, true)` to get a rejected promise. 
	Handle the error with error handler. 
	Show a message using `console.error` for errors.
*/
/* SOLUTION */
// const fakeFetch = (msg, shouldReject) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (shouldReject) {
// 				reject(`error from server: ${msg}`)
// 			}
// 			resolve(`from server ${msg}`);
// 		}, 3000)
// 	})
// }
// fakeFetch('Apps', true)
// 	.then(data => console.log(data))
// 	.catch(console.error)


/* ex13: chaining
### challenge
Create a function `getServerResponseLength(msg)` 
This function will use `fakeFetch()` internally  with the message and 
return the length of the response received by server.

Note: Instead of returning the response from server this should return the length.
Hint:  It will return in a promise.

### understanding
Whatever you return from `.then()` also becomes a promise. And this is how the chain propagates.
*/
/* SOLUTION */
// const fakeFetch = (msg, shouldReject) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (shouldReject) {
// 				reject(`error from server: ${msg}`)
// 			}
// 			resolve(`from server ${msg}`);
// 		}, 3000)
// 	})
// }
// const getServerResponseLength = msg => {
// 	return fakeFetch(msg)
// 		.then(data => data.length)
// }
// getServerResponseLength('cool')


/* ex14: waterfall data

### challenge

Write a function `syncCallsToServer(msg1, msg2)` which will take two messages and call `fakeFetch()` with the second message only when the first message has returned from the server.

### understanding

Think of this as a situtation where you need to get `userID` from the server to get the `order` data for the user. You would need userID as part of the query to get order. How would you do that?
*/
// const fakeFetch = (msg, shouldReject) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (shouldReject) {
// 				reject(`error from server: ${msg}`)
// 			}
// 			resolve(`from server ${msg}`);
// 		}, 3000)
// 	})
// }
// const syncCallsToServer = (msg1, msg2) => {
// 	return fakeFetch(msg1)
// 					.then(msg1Data => fakeFetch(`${msg1Data} ${msg2}`))
// 					.then(response => console.log(response))
					
// }
// syncCallsToServer('Dragon', 'Ball Z')


/*
#####################
#### ASYNC AWAIT ####
#####################
*/
/*
BEST PRACTICES:
	1. Use async await as much as possible.
	2. Always take care of the error handling as well.
*/

/*NORMAL FUNCTION SYNTAX
NOTE: `async` keyword comes before function keyword
*/
// async function printDataFromServer() {
// 	const serverData = await anyPromiseWhichWillReturnData() 
// 	// .then(data => { sksksksksksk(), sjskssks()})
//   console.log(serverData);
// }

/*ES6 ARROW FUNCTION SYNTAX
NOTE: `async` keyword comes before the ()
*/
// const printDataFromServer = async () => {
// 	try {
// 		const serverData = await anyPromiseWhichWillReturnData();
// 	  console.log(serverData);
// 	} catch (err) {
// 	 console.log(err)
// 	}
// }


/*ex15: use async-await with fakeFetch 
### challenge
Given the syntax above. 
Call `fakeFetch()` with some msg and 
use await to get the data and then print it.
*/
// const fakeFetch = (msg, shouldReject) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (shouldReject) {
// 				reject(`error from server: ${msg}`)
// 			}
// 			resolve(`from server ${msg}`);
// 		}, 3000)
// 	})
// }
// const printData = async (msg) => {
// 	try {
// 		const serverData = await fakeFetch(msg)
// 		console.log(serverData)
// 	}
// 	catch(error) {
// 		console.log(error)
// 	}
// }	
// printData('COOLA')


/* ex16: use async-await to do waterfall(ex14)

ex14: waterfall data
### challenge
Write a function `syncCallsToServer(msg1, msg2)` which will take two messages and call `fakeFetch()` with the second message only when the first message has returned from the server.
*/
// const fakeFetch = (msg, shouldReject) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (shouldReject) {
// 				reject(`error from server: ${msg}`)
// 			}
// 			resolve(`from server ${msg}`);
// 		}, 3000)
// 	})
// }
// const syncCallsToServer = async (msg1, msg2) => {
// 	const msg1Data = await fakeFetch(msg1) 
// 	const fullData = await fakeFetch(`${msg1Data} ${msg2}`)
// 	console.log(fullData)
// }
// syncCallsToServer('OnePunch', 'Man')














