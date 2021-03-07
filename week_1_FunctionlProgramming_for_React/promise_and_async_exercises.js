/*
###############################
#### PROMISES JS EXERCISES ####
###############################
*/

/*
 ## h/w ex6: setInterval
### challenge

- learn how setInterval works
*/
/*setInterval ex1.
- write a function which takes a message and time. 
  The function should print that message every X interval.*/
/*CODE SOLUTION*/
// const showRepeatedMsg = (msg, timeInterval) => {
// 	 // after each consecutive timeInterval, 
// 	 // setInterval runs the callback
//    setInterval(
//       () => console.log(msg), 
//       timeInterval
//    );
// }
// // repeats the msg after every two seconds
// showRepeatedMsg('Apps', 2000)

/*setInterval  ex2.
- Write a function which takes a number. 
  Then print a countdown from that number to 0. At zero print "Bang Bang!"*/
/*CODE SOLUTION*/
// const countDownTimer = number => {
// 	// setInterval returns an intervalID
// 	const intervalID = setInterval(() => {
// 		number===0 ? console.log('Bang Bang') :
// 			number>0 ? console.log(number) :
// 				// IIFE with arrow function syntax
// 				(() => setTimeout(() => clearInterval(intervalID))) ()
// 		number -= 1
// 	}, 1000);
// }
// countDownTimer(5)

/*
###############################
#### ASYNC AWAIT EXERCISES ####
#### -----------------------------------------
Solve all promise exersices-using async-await
#### -----------------------------------------
###############################
*/
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
// const printSuccessData = async (msg) => {
//   try {
// 		const serverData = await fakeFetch(msg)
// 	  console.log(serverData);
// 	} catch (err) {
// 	 console.log(err)
// 	}
// }
// printSuccessData('data via async-await')


/* ex12: print data on success, print error on failure 
	Call `fakeFetch(msg, true)` to get a rejected promise. 
	Handle the error with error handler. 
	Show a message using `console.error` for errors.*/
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
// const printErrorData = async (msg) => {
//   try {
//     const serverData = await fakeFetch(msg, true)
//     console.log(serverData)
//   } catch(error) {
//     console.log(error)
//   }
// }
// printErrorData('ABCD')


/* ex13: chaining
### challenge
Create a function `getServerResponseLength(msg)` 
This function will use `fakeFetch()` internally  with the message and 
return the length of the response received by server.
Note: Instead of returning the response from server this should return the length.*/
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
// const getServerResponseLength = async (msg) => {
//   try {
//     const serverData = await fakeFetch(msg)
//     const serverDataLen = serverData.length
//     console.log(serverDataLen)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getServerResponseLength('123456')


/* ex14: waterfall data

### challenge
Write a function `syncCallsToServer(msg1, msg2)` which will take two messages and call `fakeFetch()` with the second message only when the first message has returned from the server.

### understanding
Think of this as a situtation where you need to get `userID` from the server to get the `order` data for the user. You would need userID as part of the query to get order. How would you do that?*/
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
// const syncCallsToServer = async (msg1, msg2) => {
//   try {
//     const msgData1 = await fakeFetch(msg1);
//     const finalData = await fakeFetch(`${msgData1} ${msg2}`)
//     console.log(finalData)
//   } catch (error) {
//     console.log(error)
//   }
// }
// syncCallsToServer('Yu Gi', 'Yo')

