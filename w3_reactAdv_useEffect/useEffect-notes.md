<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    body{
      width: 70vw;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  
## Side Effects or Effects

    React functions are pure. If you want to do something outside the functions you call it side Effects or Effects. The way to do it is using `useEffect()`.

>### *REMEMBER!:*
>`useEffect()` runs **after** every render. Which ensures that renders are not slowed down by whatever code you put inside `useEffect()`.


# the dependency array

`useEffect()` has a second argument. Just to reiterate, the first argument is the callback that you are providing. So, the second argument is an array that tells React when to run this effect. 

> <img src="https://miro.medium.com/max/1854/1*dPfPnH9Yx6f2Ts-evw3Bgw.png" alt="useEffect dependency array table image" height='600px' width='650px' />
> 
> [Image Source](https://manningbooks.medium.com/exploring-the-useeffect-api-with-easy-examples-7e9382ffef97)


</body>
</html>


