/* 
What is Async / Await?
How Async / Await works behind the scenes?
Examples of using async/await.
Error Handling
Interviews
Async / await vs Promise .then / .catch
*/

/* 
 Async function always returns a promise. 
    If the function returns a value, the promise will be resolved with that value. 
    If the function throws an error, the promise will be rejected with that error.

 Async and await combo is used to handle promises more easily. 
    It allows us to write asynchronous code in a synchronous manner, making it easier to read and understand.
 Await is a keyword that can only be used inside an async function and the top level body of module.
    It is used to wait for a promise to resolve or reject before moving on to the next line of code. 
    When the await keyword is encountered, the async function is paused until the promise is resolved or rejected. 
    Once the promise is resolved, the value is returned and can be assigned to a variable or used in further code.
*/

// Returnuning  a value from async function
async function getSomeData() {
    return 'Learning Async/await';
}
// const pro = await getSomeData();
// console.log(pro)

// /////////////////////
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise p resolved')
    }, 5000)
})

// How do we handle the promise before async/await. Let's say promise P needs to be handled inside getdata()
function getData() {
    p.then(res => console.log(res));    // JS engine will not wait for promise to be resolved
    console.log('Namaste Javascript')   // execution does not wait while promise is executing but await does wait 
}

// How do we handle the promise after async/await. Let's say promise P needs to be handled inside handlePromiseWithasync()
async function handlePromiseWithasync() {
    const val = await p;    // JS engine will (appears to be waiting) wait promise to be resolved by suspending the function untill promise is resolved. 
    console.log(val)
    console.log("Hello World");
}
handlePromiseWithasync();

// Output : 
// promise p resolved
// Hello World

// Why async and await is introduced when we have promises?
// handlePromise() does wait for the promise p1 and p2 to be resolved.
// As soon as handlePromise function encounters the await keyword, It will suspend the execution of the function in the call statck and move forward with the execution in code. 
// as soon as promise is resolved, function will again will be added to the call stack and execution will resume from the line where it was suspended.
// Same will happen for p2 as well.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value 1")
    }, 20000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value 2")
    }, 10000);
})

// 3 interseting scenarios 
// if both the promises p1 & p2 has same waiting time 10s, they will wait for 10s cumulatively and not 20s.
// Here, p2 = 10s, p1 = 20s. p2 will resolve earlier but it still has to wait for p1 to be resolve.
// But if reverse the order of p2 & p1 in execution then p2 will resolve and print first and then p1, becuase p1 takes 20s and p2 takes 10s to be resolved.  
// * Even you put debugger promise will resolve it is not like if we have put debugger so further code will stop.
async function handlePromise() {
    console.log("Hello World");

    const val1 = await p1;      //Js engine appears to be waiting here but it is not. it switches the context 
    console.log("Namaste Javascript 1")
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste Javascript 2")
    console.log(val2)
}
handlePromise();

// 2 points which nobody noticed is 
// 1. Promise does not even wait for debugger, if it has come in execution then even debugger can not stop promise like other lines of code stops there. 
// 2. Both promise waiting time is cumulative. if p1 = 10s and p2 = 5s then both promise will be resolved with in 10s and not 15s. This proves point number 1, that promises are not even in call stack they are will execute or debugger also can not stop executing promises. 


// Error handling traditional way
const api = `https://api.github.com/users/sumitsah`
async function handleP() {
    const data = await fetch(api)
    const jsonVal = await data.json()
    console.log(jsonVal)
}
// if you do not return from async function then it returns undefind. but if 
// the promise inside async function gets rejected then error can be catched 
handleP()
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Error handling using try catch

// Async / await vs Promise .then / .catch 
// Async / await is just a syntactical sugar for promise .then/ .catch. JS behind the scene using same promise 

// This Keyword
/* 
The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined. When a regular function is invoked as a method of an object (obj.method()), this points to that object. When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode). The Function.prototype.bind() method can create a function whose this binding doesn't change, and methods Function.prototype.apply() and Function.prototype.call() can also set the this value for a particular call.

Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined. This behavior makes arrow functions particularly useful for callbacks and preserving context. However, arrow functions do not have their own this binding. Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods.
*/

/* 
1. this in global space
2.  this inside a function
3.  this inside non-strict mode - (this substitution)
4.  this keyword value depends on how the 'this' is called.
5. this inside a object's method
6.  call bind apply method (sharing methods)
7.  this inside arrow function
8.  this inside nested arrow function
9.  this inside DOM

*/
//1. this in global space
this // GLobal Object , window global
// JS can run into mobile, web, node, smart bulb, where ever JS runs there is a javascript runtime environment
// that can be different. Inside brower globalObject is different and likewise in node
// inside browser - window, inside node - global

//2.  this inside a function
function x() {
    // value depends on strict and non strict mode = strict mode will be undefind and non strict mode -> window
    console.log(this)
}
x();

//3.  this inside non-strict mode - (this substitution)
// If the value of this keyword is undefind or null 'this' will be replaced with globalObject only in non strict mode

//4.  this keyword value depends on how the function is called.
x(); // it is undefined in strict mode
window.x(); // it is window object in even in strict mode.


//5. this inside a object's method
const obj = {
    a: 10,
    y: function () {
        console.log(this)  // The value of 'this' will be 'obj'
    }
}
obj.y();

// 6. call, bind and apply methods (Sharing methods) (overriding the value of this keyword)
const student = {
    name: 'Sumit',
    printName: function () {
        console.log(this.name);
    }
}

/* const student = {
    name: 'Sumit',
    printName () {
        console.log(this.name);
    }
} */

const student2 = {
    name: 'Sahu'
}

student.printName()
student.printName.call(student2);

// this inside arrow function 
// Lexical means how it is written in the code
//7. Arrow function dows not have their own this binding associated with it. it retains this value of the enclosing lexical context

const obj12 = {
    a: 10,
    y: function () {
        console.log(this)  // The value of 'this' will be obj12
    }
}
obj12.y();

const obj1 = {
    a: 10,
    y: () => {
        console.log(this)  // The value of 'this' will be window
    }
}

obj1.y();

//8. this inside nested arrow function

const obj2 = {
    a: 10,
    x: function () {
        // enclosing lexical context of y is x
        const y = () => {
            console.log(this)  // The value of 'this' will be 'obj2'
        };
        y();
    }
}

obj2.x();

// this inside Dom elements => reference to HTML element (check index.hmtl button element)

// this inside class, constructor and 