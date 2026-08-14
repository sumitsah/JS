# call(), bind(), apply()

```javascript
let name1 = {
  firstName : 'Sumit',
  lastName: 'Sahu',
  printFullName: function(){
    console.log(this.firstName + " " + this.lastName);
  }
}
name1.printFullName();

let name2 = {
  firstName : 'Mahendra',
  lastName: 'Dhoni',
  printFullName: function(){
    console.log(this.firstName + " " + this.lastName);
  }
}
name2.printFullName();
```

## call Method
we can print the fullname in both the objects but here we are creating printFullName() function each time when creating an object literal. Which is obviously is not a good practice to write repeatitive code.

function can be defind in one of the object and can be borrowed to other object by means of call method. We can use call method to share the function with object. Which is known as function borrowing.

We need to tell call method to point to different object by passing in the first argument, in our case name2

### function borrowing
```javascript
name1.printFullName(name2);
```

But we do not write function inside object which we want to share and keep the function outside the object literal.

```javascript
let name1 = {
  firstName : 'Sumit',
  lastName: 'Sahu',
}

let printFullName = function(){
  console.log(this.firstName + " " + this.lastName);
}

printFullName.call(name1);  //Sumit Sahu
```

Now we can simply call printFullName(name1). What if function had an argument.

```javascript
let printFullName = function (hometown, state) {
  console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
}

printFullName.call(name1, "Jabalpur", "MP");    //Sumit Sahu Jabalpur MP
```

So first argument of call method is this context and later arguments are arguments of printFullName function.

## apply Method
The only difference between call and apply method is that the way we pass the arguments. first argument is refrence to 'this' variable and second is list of arguments.

```javascript
printFullName.apply(name1, ["Jabalpur", "MP"]);
```

## bind Method
bind method looks excatly the same as the call method, but the only difference is instead of directly calling. So bind will create a copy of printFullName and bind printFullName to name1 object and will return a function. It does not call the function rather than bind returns a function, which can be called later attaching the reference of name1.

```javascript
let printFullName = function (hometown, state) {
  console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
}
let printMyName = printFullName.bind(name1, "Jabalpur", "MP");
printMyName()   // Sumit Sahu Jabalpur MP
printMyName('Jila')   // Sumit Sahu Jabalpur MP  
// Jila will be ignored as printFullName takes only two parameters 
```

## Application of bind
### Currying using bind Method
```javascript
let multiply = function(x, y){
  console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2);
```

Above, we are calling multiply using bind method. The expression will be replaced as follows

#### Hypothetically
```javascript
let multiplyByTwo = function(y){
  let x =2;
  console.log(x*y)
}
```

Now let's call multiplyByTwo:
```javascript
multiplyByTwo(5) // output : 10
```

This is called function currying.

If we pass third argument to bind
```javascript
let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5) // output : 6
```

Here 3 will act as y and in multiplyByTwo(5) 5 will be ignored. This is one way of acheiving function currying.

### Currying using Clousre
Other way to acheive function currying is By 'Clousre'.
```javascript
let multiply = function(x){
  return function(y){
    console.log(x * y)
  }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3) // output : 6
```
---

# Arrow Functions and 'this' Context Limitations

In JavaScript, arrow functions handle the `this` keyword differently than traditional function expressions. This document details why `call()`, `apply()`, and `bind()` do not work with arrow functions, and provides examples where arrow functions are the ideal choice for contextual scoping.

---

## 1. Using call(), apply(), and bind() with Arrow Functions

No, you **cannot** use `call()`, `apply()`, or `bind()` to change the `this` context of an **arrow function**. 

If you attempt to pass a context object to an arrow function using these methods, JavaScript completely ignores the argument and keeps the original context.

### Why This Happens
* **Normal Functions:** Have a dynamic `this` binding. The value of `this` is determined by *how* and *where* the function is called.
* **Arrow Functions:** Do not have their own `this` binding. They capture the `this` value of the **enclosing lexical scope** (the scope where the arrow function was defined) at the time they are created. This binding is permanent and immutable.

### Code Demonstration

Here is what happens when you try to change the context of an arrow function:

```javascript
const name1 = {
  firstName: 'Sumit',
  lastName: 'Sahu'
};

// Defined globally, so its lexical 'this' points to the global object (window/global)
const printFullNameArrow = (hometown, state) => {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
};

// ❌ This will NOT bind to name1. It ignores name1 and prints "undefined undefined..."
printFullNameArrow.call(name1, "Jabalpur", "MP"); 

// ❌ apply() fails to change context too
printFullNameArrow.apply(name1, ["Jabalpur", "MP"]);

// ❌ bind() fails to change context too
const boundArrow = printFullNameArrow.bind(name1, "Jabalpur", "MP");
boundArrow(); 
```

### Can They Be Used for Arguments?
Yes, but **only for passing arguments**, not for changing `this`. 

While `bind()`, `call()`, and `apply()` cannot change the context, they can still pass values down into the function parameters. This means you can still use `bind()` with arrow functions for **function currying**:

```javascript
// A normal arrow function with no 'this' reference
const multiply = (x, y) => console.log(x * y);

// The first argument (this context) is ignored, but '2' is bound to 'x'
const multiplyByTwo = multiply.bind(null, 2);

multiplyByTwo(5); // Output: 10 (Function currying still works!)
```

---

## 2. When Arrow Functions Are the Superior Choice

Arrow functions are the perfect choice when you want a function to automatically inherit the `this` context from its surrounding code. This solves a major historical headache in JavaScript where inner callback functions would accidentally lose track of the object context.

### Example A: Fixing Asynchronous Callbacks (e.g., `setTimeout`)

When you use a normal function inside an asynchronous callback like `setTimeout`, the function gets detached from your object and executes in the global context, causing `this` to point to the global object (`window`). 

#### ❌ The Problem with Normal Functions
```javascript
const user = {
  name: 'Sumit',
  hobbies: ['Coding', 'Reading'],
  
  printHobbies() {
    // Normal function inside setTimeout
    setTimeout(function() {
      // ❌ Throws an error or prints undefined because 'this' points to 'window'
      console.log(this.name + " loves " + this.hobbies.join(", "));
    }, 1000);
  }
};

user.printHobbies(); // Output: "undefined loves Cannot read properties of undefined (reading 'join')"
```
*Historically, you had to manually use `.bind(this)` on the function to fix this.*

#### ✅ The Elegant Solution with Arrow Functions
An arrow function does not create its own `this`. Instead, it captures the `this` of `printHobbies()` (which is the `user` object).

```javascript
const user = {
  name: 'Sumit',
  hobbies: ['Coding', 'Reading'],
  
  printHobbies() {
    //  Arrow function inherits 'this' from printHobbies()
    setTimeout(() => {
      console.log(this.name + " loves " + this.hobbies.join(", "));
    }, 1000);
  }
};

user.printHobbies(); // Output after 1 second: "Sumit loves Coding, Reading"
```

---

### Example B: Handling Class or Object Array Iterators (e.g., `forEach`)

If you want to iterate over an array inside an object method and update that same object's state, using an arrow function ensures you don't lose access to the parent properties.

#### ❌ The Problem with Normal Functions
```javascript
const shoppingCart = {
  taxRate: 0.18,
  prices: [100, 200, 300],
  
  calculateTotalWithTax() {
    let total = 0;
    this.prices.forEach(function(price) {
      // ❌ 'this' is lost inside this normal callback function
      total += price + (price * this.taxRate); 
    });
    return total;
  }
};

console.log(shoppingCart.calculateTotalWithTax()); // NaN (because this.taxRate is undefined)
```

#### ✅ The Elegant Solution with Arrow Functions
```javascript
const shoppingCart = {
  taxRate: 0.18,
  prices: [100, 200, 300],
  
  calculateTotalWithTax() {
    let total = 0;
    //  Arrow function directly uses the parent method's 'this'
    this.prices.forEach((price) => {
      total += price + (price * this.taxRate); 
    });
    return total;
  }
};

console.log(shoppingCart.calculateTotalWithTax()); // Output: 708
```

---

## 3. Summary Rule of Thumb

* If you are defining an **inner function inside a method**, and that inner function needs to talk to the main object, use an **arrow function**.
* If you are defining a **top-level method** on an object literal that you plan to reuse or borrow later via `call`, `apply`, or `bind`, use a **normal function**.