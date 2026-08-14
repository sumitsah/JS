# JavaScript ES6 Features Complete Guide

**ECMAScript 6 (ES6 / ECMAScript 2015)** was a foundational update to JavaScript. It introduced critical syntax enhancements, reduced boilerplate code, and standardized asynchronous architecture.

---

## 1. Block-Scoped Declarations (`let` & `const`)

ES6 introduced block-scoping to variables, replacing the function-scoped `var` keyword. This mitigates risks associated with variable hoisting and unintentional global overwrites.

*   **`let`:** Declares mutable, block-scoped variables.
*   **`const`:** Declares immutable, block-scoped variables that cannot be reassigned.

```javascript
// Scope isolation example
if (true) {
  var globalScope = "Accessible outside";
  let blockScope = "Hidden outside";
  const constantValue = "Read-only and hidden";
}

console.log(globalScope); // Prints: "Accessible outside"
// console.log(blockScope);   // Throws ReferenceError
// console.log(constantValue); // Throws ReferenceError
```

---

## 2. Arrow Functions

Arrow functions offer a short, clean syntax for writing function expressions. They omit the `function` and `return` keywords for single-line expressions and do not build their own `this` binding context.

*   **Implicit Return:** One-line statements automatically return values.
*   **Lexical `this`:** Inherits the `this` context from the parent block, eliminating the need for `.bind(this)`.

```javascript
// Traditional syntax
const multiplyOld = function(x, y) {
  return x * y;
};

// ES6 Arrow function (Implicit return)
const multiplyNew = (x, y) => x * y;
```

---

## 3. Template Literals

Template literals leverage backticks (`` ` ``) instead of standard quotes to handle complex string composition and multi-line formatting without concatenation strings (`+`).

*   **String Interpolation:** Dynamically insert variables inside `${expression}` placeholders.
*   **Multi-line Formats:** Preserves line-breaks explicitly inside the code editor.

```javascript
const framework = "React";
const version = 19;

// Evaluation inside text block
const statusReport = `You are deploying a ${framework} project.
Current system target is version ${version}.`;
```

---

## 4. Destructuring Assignment

Destructuring lets you extract values out of arrays or properties out of objects cleanly into dedicated variable definitions in a single line.

```javascript
// Object Destructuring
const profile = { name: "Sarah", role: "Developer", country: "CA" };
const { name, role } = profile;

// Array Destructuring
const pricing = [99, 149, 199];
const [basic, professional, enterprise] = pricing;
```

---

## 5. Spread & Rest Operators (`...`)

The three-dot syntax handles packing and unpacking processes dynamically based on where you evaluate the operator.

*   **Spread Operator:** Explodes items of an iterable object (like arrays or objects) into discrete targets.
*   **Rest Operator:** Collects diverse independent elements and compresses them into a standard array.

```javascript
// Spread: Shallow cloning and combining
const coreItems = ["HTML", "CSS"];
const fullStack = [...coreItems, "JS", "Node"]; // ["HTML", "CSS", "JS", "Node"]

// Rest: Dynamic argument collection
function calculateTotal(...prices) {
  return prices.reduce((total, current) => total + current, 0);
}
```

---

## 6. Default Parameters

Enables setting structural fallbacks natively inside function signatures. The fallback activates if arguments evaluate to `undefined`.

```javascript
function configureUser(username, authorization = "Guest") {
  return `User ${username} holds ${authorization} clearances.`;
}

console.log(configureUser("Alex")); // Fallback triggers: "Guest"
```

---

## 7. Classes

Classes deliver elegant syntactic sugar layered over the native prototype inheritance architecture of JavaScript, providing an OOP structure common in other programming frameworks.

```javascript
class Employee {
  constructor(name, designation) {
    this.name = name;
    this.designation = designation;
  }
  
  logActivity() {
    return `${this.name} is working as a ${this.designation}.`;
  }
}

const developer = new Employee("Marcus", "Frontend Engineer");
```

---

## 8. Promises

Promises represent a native object structure managing asynchronous workflows, safely handling sequence failures and preventing deep callback nesting chains.

```javascript
const downloadFile = (url) => {
  return new Promise((resolve, reject) => {
    let active = true; 
    if (active) resolve("File content payload");
    else reject("Connection timeout error");
  });
};
```

---

## 9. Native Modules (`import` / `export`)

Formalized module isolation natively at the engine level, allowing structured script composition across discrete files without rely scripts like CommonJS.

```javascript
// utils.js
export const formatCurrency = (val) => `$${val.toFixed(2)}`;

// application.js
import { formatCurrency } from './utils.js';
```

---

## 10. Collections (`Map` and `Set`)

Introduced optimized, dedicated data structures for handling complex indexing scenarios.

*   **`Map`:** Key-value storage pairs that accept any valid primitive or object reference as an indexing key.
*   **`Set`:** Unique value arrays that automatically isolate and drop any duplicated entries.

```javascript
// Set eliminates duplicate values automatically
const uniqueIds = new Set([101, 102, 102, 103]); // Set only contains: 101, 102, 103
```