# JavaScript Closures: A Comprehensive Guide

## What is a Closure?
A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). 

In other words, a closure gives an inner function access to its outer scope. In JavaScript, closures are created automatically every time a function is created, at function creation time.

---

## Lexical Scoping
Lexical scoping describes how a parser resolves variable names when functions are nested. The word *lexical* refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

### Example
```javascript
function init() {
  var name = "Mozilla"; // name is a local variable created by init

  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  
  displayName();
}

init();
```
If you run this code in your console, the `console.log()` statement within the `displayName()` function successfully displays the value of the `name` variable, which is declared in its parent function.

---

## Scoping with `let` and `const`
Traditionally (before ES6), JavaScript variables only had two kinds of scopes: **function scope** and **global scope**. 

Variables declared with `var` are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function. This can be tricky because blocks with curly braces do not create new scopes for `var`.

### The Problem with `var` (Blockless Scope)
```javascript
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}

console.log(x); // Works! x is accessible outside the block.
```

### The Solution: ES6 Block Scoping
In ES6, JavaScript introduced `let` and `const` declarations. Among other features like **temporal dead zones**, they allow you to create block-scoped variables.

```javascript
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}

console.log(x); // ReferenceError: x is not defined
```

---

## Closure in Action
Functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created.

### Example
```javascript
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
// makeFunc() has finished executing here, but...
myFunc(); // Logs: "Mozilla"
```

### How it works
In this case, `myFunc` is a reference to the instance of the function `displayName` that is created when `makeFunc` is run. The instance of `displayName` maintains a reference to its lexical environment, within which the variable `name` exists. 

For this reason, when `myFunc` is invoked, the variable `name` remains available for use, and `"Mozilla"` is successfully passed to `console.log`.

---

## Practical Closures
Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. 

This has obvious parallels to **object-oriented programming**, where objects allow you to associate data (the object's properties) with one or more methods. Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

### Common Use Cases
* **Counters:** Maintaining private state without global variables.
* **UI Sizing:** Dynamically resizing the font size in the document body using relative units like `em`.

---

## Closure Scope Chain
A nested function's access to the outer function's scope includes the enclosing scope of the outer function—effectively creating a chain of function scopes. Closures can capture variables in block scopes and module scopes as well.

### 1. Closures Over Block Scopes
The following example creates a closure over the block-scoped variable `y`:

```javascript
function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined (y is block-scoped)
  console.log(getY()); // 6 (getY forms a closure over y)
}

outer();
```

### 2. Closures Over Modules
Closures over modules provide a clean way to handle private data encapsulation.

**`myModule.js`**
```javascript
let x = 5;

export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

**`main.js`**
```javascript
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```
Here, the module exports a pair of getter-setter functions, which close over the module-scoped variable `x`. Even when `x` is not directly accessible from other modules, it can be read and written exclusively through these functions.
