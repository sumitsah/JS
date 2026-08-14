Closures
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.


Lexical scoping
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

If you run this code in your console, you can see that the console.log() statement within the displayName() function successfully displays the value of the name variable, which is declared in its parent function. This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

Scoping with let and const
Traditionally (before ES6), JavaScript variables only had two kinds of scopes: function scope and global scope. Variables declared with var are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function. This can be tricky, because blocks with curly braces do not create scopes:

if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);

In ES6, JavaScript introduced the let and const declarations, which, among other things like temporal dead zones, allow you to create block-scoped variables.

if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined

Closure
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

Functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.

Practical closures
Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

Eg. Counter, Resize the font size in body using relative unit em

Closure scope chain
A nested function's access to the outer function's scope includes the enclosing scope of the outer function—effectively creating a chain of function scopes. To demonstrate, consider the following example code.

Closures can capture variables in block scopes and module scopes as well. For example, the following creates a closure over the block-scoped variable y

function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined
  console.log(getY()); // 6
}

outer();

Closures over modules can be more interesting.

// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};

Here, the module exports a pair of getter-setter functions, which close over the module-scoped variable x. Even when x is not directly accessible from other modules, it can be read and written with the functions.

import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
==================================================================

Temporal dead zone (TDZ)
A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized.

While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a ReferenceError. The variable is initialized with a value when execution reaches the place in the code where it was declared. If no initial value was specified with the variable declaration, it will be initialized with a value of undefined.

This differs from var variables, which will return a value of undefined if they are accessed before they are declared. The code below demonstrates the different result when let and var are accessed in code before the place where they are declared.

{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}

The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position). For example, the code below works because, even though the function that uses the let variable appears before the variable is declared, the function is called outside the TDZ.

{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}

Using the typeof operator for a variable in its TDZ will throw a ReferenceError:

{
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
}

This differs from using typeof for undeclared variables, and variables that hold a value of undefined:

console.log(typeof undeclaredVariable); // "undefined"

Note: let and const declarations are only processed when the current script gets processed. If you have two <script> elements running in script mode within one HTML, the first script is not subject to the TDZ restrictions for top-level let or const variables declared in the second script, although if you declare a let or const variable in the first script, declaring it again in the second script will cause a redeclaration error.

Redeclarations
let declarations cannot be in the same scope as any other declaration, including let, const, class, function, var, and import declaration.

{
  let foo;
  let foo; // SyntaxError: Identifier 'foo' has already been declared
}

A let declaration within a function's body cannot have the same name as a parameter. A let declaration within a catch block cannot have the same name as the catch-bound identifier.

function foo(a) {
  let a = 1; // SyntaxError: Identifier 'a' has already been declared
}
try {
} catch (e) {
  let e; // SyntaxError: Identifier 'e' has already been declared
}

If you're experimenting in a REPL, such as the Firefox web console (Tools > Web Developer > Web Console), and you run two let declarations with the same name in two separate inputs, you may get the same re-declaration error. See further discussion of this issue in Firefox bug 1580891. The Chrome console allows let re-declarations between different REPL inputs.

You may encounter errors in switch statements because there is only one block.

let x = 1;

switch (x) {
  case 0:
    let foo;
    break;
  case 1:
    let foo; // SyntaxError: Identifier 'foo' has already been declared
    break;
}

To avoid the error, wrap each case in a new block statement.

let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}

Examples
Scoping rules
Variables declared by let have their scope in the block for which they are declared, as well as in any contained sub-blocks. In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function:

function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}

At the top level of programs and functions, let, unlike var, does not create a property on the global object. For example:

var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined

TDZ combined with lexical scoping
The following code results in a ReferenceError at the line shown:

function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();

Other situations
When used inside a block, let limits the variable's scope to that block. Note the difference between var, whose scope is inside the function where it is declared.

var a = 1;
var b = 2;

{
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

However, this combination of var and let declarations below is a SyntaxError because var not being block-scoped, leading to them being in the same scope. This results in an implicit re-declaration of the variable.

let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}

Declaration with destructuring
The left-hand side of each = can also be a binding pattern. This allows creating multiple variables at once.

const result = /(a+)(b+)(c+)/.exec("aaabcc");  //["aaabcc", "aaa", "b", "cc"]
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"


Hoisting
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

A promise is said to be settled if it is either fulfilled or rejected, but not pending.

![alt text](promises.png)

Promise itself has no first-class protocol for cancellation, but you may be able to directly cancel the underlying asynchronous operation, typically using AbortController.

Chained Promises
The promise methods then(), catch(), and finally() are used to associate further action with a promise that becomes settled. The then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case. The catch() and finally() methods call then() internally and make error handling less verbose. For example, a catch() is really just a then() without passing the fulfillment handler. As these methods return promises, they can be chained. For example:

const cart = ['shoes', 'kurta', 'pants'];

Operations are asynschronous 
Traditionally coding with callbacks, createOrder function(API) takes a cart details and a callback function.
createOrder generates the orderId and some point of time call the callback function with the orderId.
Here, we are giving control to createOrder API to call our callback function, giving control to other APIs to
call our callback functions are known as inversion of control. createOrder API might call it or call it twise,
we do not know.  

createOrder(cart, function (orderId) {
    proceedToPayment(orderId)
})

Promise solves this inversion of control problem by chaining the then handler instead of passing the callback
to the createOrder API, now the createOrder API will return a promise, which will include either a orderId (value)
or rejection reason, on which we can attach our callback. 

Consuming a Promise
const promise = createOrder(cart);  // {data: undefined}

// evantually {data: orderId}
promise.then(function (orderId) {
    proceedToPayment(orderId)
})

Initially Promise will have no data but eventually promise will have data in it. Once promise is filled with data
(orderId), the then callback is called automatically with orderId. We can see the difference in both the approaches,
in traditional approach callback function is passed to createOrder function whereas using promise callback functions
are attached to the promise's then. Now we have full control over our callback and also have a gurantee that our
callback will be called only when promise data is arrived and only once.  

const GITHUB_API = 'https://api.github.com/users/sumitsah'
const user = fetch(GITHUB_API);

Before we get the response from fetch
![alt text](<Screenshot 2026-08-09 194206.png>)

After we get the response from fetch
![alt text](image.png)
![alt text](image-1.png)

here Response is the readable stream

Promise is immutable, we can utilize the promise data to pass anywhere without worrying about that someone will mutate
the data.

Let's say we have the following code for order flow

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        })
    })
})

Here our code is growing horizontally, instead of vertically. which is a callback hell or Pyramid of doom.
promise can solve this problem using promise chainig. The way we handle callbacks in promises is attaching
callbacks to the then method. The following way of writing code is promise chaining. 

createOrder(cart)
    .then(function (orderId) {
        proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        showOrderSummary(paymentInfo)
    })
    .then(function () {
        updateWalletBalance()
    })

One thing we should notice in above then chaining is that data should be flown from one then to another then.
Passing data througout the chain is neccessary.

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function () {
        return updateWalletBalance()
    })

Similar thing can be achieved by writing callbacks as arrow functions. 

createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then(() => updateWalletBalance())

Quick Recap : 
Promise is not cancleable.
Promise gives gurantee in whole transcation and can only be resolved once.
Promise can have three state namely : Pending, Fulfilled and Rejected.
Promise is immutable.
Promise chaining solves the issue of callback hell.
Promise needs to be returned in the promise chain down to the next then.
