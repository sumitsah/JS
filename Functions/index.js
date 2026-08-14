/* Function Statement or Function Declaration
Function Expression
Anonymous Function
Named Function Expression
Difference between Parameters & Arguments ?
first class function
Arrow function
 
*/

a();
b();

// Function Statement or Function Declaration
function a() {
  console.log("a called");
}

// Function Expression
// Function acts like a value
var b = function () {
  console.log("b called");
}

// Difference between Function Statement & Function Expression
/* 1. Function Statement or Function Declaration are hoisted to the top of the code and can be called before they are defined. In contrast, Function Expressions are not hoisted and cannot be called before they are defined.
2. Function Statement or Function Declaration have a name, while Function Expressions can be anonymous (without a name) or named.
3. Function Statement or Function Declaration are defined using the function keyword followed by the function name, while Function Expressions are defined using the function keyword followed by an optional name and assigned to a variable.
4. Function Statement or Function Declaration are typically used for defining functions that will be called multiple times throughout the code, while Function Expressions are often used for defining functions that will be passed as arguments to other functions or used as callbacks.
5. Function Statement or Function Declaration are created at parse time, while Function Expressions are created at runtime when the code is executed.
6. Function Statement or Function Declaration can be used to create recursive functions, while Function Expressions cannot be used for recursion unless they are named.
7. Function Statement or Function Declaration can be used to create functions that are available globally, while Function Expressions are typically used for creating functions that are scoped to a specific block of code or function.
 */
// Function Declaration

// Anonymous Function 
// Are used in a place where functions are teated as a value.
// function () {
//   console.log("b called");
// } but passed as value

// Named Function Expression
// Giving a name to the function expressions
var b = function xyz() {
  console.log("b called");
  console.log(xyz);
}
/* 
  b(); //works perfectly fine
  xyz(); // ReferenceError: xyz is not defined because xyz is only accessible within the function itself and cannot be accessed outside of it.
  xyz is not defined in the global space. xyz is in the local space of xyz function itself. 
  */

// Difference between Parameters & Arguments ?
// argument At the time calling, whereas parameter at the time defining the function
// Parameters 

// First Class Functions
// The ability of functions to be used as values and can be passed as an argument to another functions and can be returned from 
//  the function is known as first class functions. In JavaScript, functions are treated as first-class citizens, 
// which means they can be assigned to variables, passed as arguments to other functions, and returned from functions just like any other value (such as numbers or strings).
//  This allows for powerful programming techniques such as higher-order functions, callbacks, and functional programming paradigms.
// Function are First class citizes to be used as (passed as argument, function return from another function)
var c = function (param1) {
  console.log("b called");
}

c(function () {

})

// passing a function in another function known as first class function

// Arrow Functions

// ===========================================================================================


/*  1. What is callback function in JS
2. JS is a synchronous and single threaded language,
3.  Bloking of a main thread
4.  Power of callback functions?
5. Deep about Event listeners 
6. Closures demo with event listeners
7. Scope demo with event listeners
8. Garbage collection & removeEvent Listeners


*/

// 1. What is callback function in JS
/* 
A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. 
In JavaScript, functions are first-class citizens, which means they can be treated like any other value (such as numbers or strings) and can be passed as arguments to other functions.
*/

function doSomething(callback) {

}

doSomething(function y() {

})

// function y is passed as an argument to the doSomething function and will be executed after the doSomething function has completed its operation.
// This allows for asynchronous programming and is commonly used in scenarios such as handling events, making API calls, or performing time-consuming tasks without blocking the main thread of execution.

// With the help of callback functions and setTimeout, we can simulate asynchronous behavior in JavaScript. For example, we can use setTimeout to delay the execution of a callback function, allowing us to perform tasks after a certain amount of time has passed.
// Callback functions gives us the power of asynchronity when using with setTimeOut 

setTimeout(function () {
  console.log("This is a callback function executed after 2 seconds");
}, 2000);

/* JS is a synchronous and single threaded language,
  Bloking of a main thread
  Power of callback functions?
*/

// Deep about Event listeners 
document.getElementById('clickMe').addEventListener('click', function xyz() {
  console.log('Button Clicked')
})

// Closures demo with event listeners

function attachEventListener() {
  let count = 0;
  document.getElementById('clickMe').addEventListener('click', function xyz() {
    console.log('Button Clicked', ++count)
  })
}

// Scope demo with event listeners

// Garbage collection & removeEvent Listeners
/*
 Evenet Listneres are heavy, it takes memory. Whenever we attach an event listener to an element, (it creates a closure) it creates a reference to the callback function and the element itself. 
 If we do not remove the event listener when it is no longer needed, it can lead to memory leaks, as the callback function and the element will not be garbage collected. 
 */