function getUserDetails(homeTown, state) {
    console.log(this.userName + ' ' + this.age + ' ' + homeTown + ' ' + state);
}

const user = {
    userName: 'sumit',
    age: 34
}

// const userDetails = getUserDetails.bind(user, 'Bangalore')
// console.log(userDetails('Karnataka'))

// This is a simple bind without error handling, what if myBind is not called with function but sufficient
// for the interview. Later, myBind is defind with all the checks.
Function.prototype.myBind = function (context, ...params) {
    const fn = this;
    console.log(fn)
    return function bound(...args) {
        fn.apply(context, [...params, ...args])
    }
}
const userDetails1 = getUserDetails.myBind(user, 'Bangalore')
userDetails1('Karnataka')


// Simple call
Function.prototype.myCall = function (context) {
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    context[fnSymbol]();
    delete context[fnSymbol];
}

// =====================================================================

Function.prototype.myCall = function (context, ...args) {
    // console.log(this)
    if (typeof this !== "function") {
        throw new TypeError("myCall must be called on a function");
    }

    // If context is null or undefined → default to global object
    // console.log(globalThis)
    // console.log(args)
    context = context ?? globalThis;

    // Convert primitive to object (important!)
    context = Object(context);
    // console.log(context)

    /* 
    Symbol was introduced to create unique property keys and avoid naming collisions. It is commonly used for attaching internal metadata, implementing protocols, creating hidden object properties, and safely extending objects without overwriting existing keys.
    */
    // Create unique property to avoid collision
    const fnSymbol = Symbol();
    // console.log(fnSymbol)

    // Attach function to context
    context[fnSymbol] = this;
    // context['temp'] = this;
    // // console.log(context)
    // console.dir(context)
    // console.dir(context[fnSymbol])

    // Call it
    const result = context[fnSymbol](...args);
    console.log(result)
    // const result = context.temp(...args);

    // Clean up
    delete context[fnSymbol];

    // return result;
};
// getUserDetails.myCall(user);
getUserDetails.myCall(user, 'jabalpur', 482002)
// getUserDetails.myCall(null);
// getUserDetails.myCall('Hello');

// getMoreUserDetails.apply(user, ['Jabalpur', 482002]);


Function.prototype.myApply = function (context, args) {
    // console.log(args)
    // const thisArgs = args
    if (typeof this != 'function') {
        throw new TypeError("myApply must be called on a function");
    }

    context = context ?? globalThis;
    context = Object(context);

    // Step 4: Validate argsArray
    if (args != null && !Array.isArray(args)) {
        throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    // Step 5: Create unique key
    const fnSymbol = Symbol("fn");

    context[fnSymbol] = this;
    // console.log(context)

    const result = context[fnSymbol](...(args || []));

    delete context[fnSymbol];
    return result;
}
// getMoreUserDetails.myApply(user, ['Jabalpur', 482002]);


const user3 = {
    userName: 'Sumit',
    age: 50,
    getUserDetails() {
        console.log(this.userName + ' ' + this.age);
    }
}

// const userDetails23 = getUserDetails.bind(user3);
// console.log(userDetails23)
// userDetails23();

Function.prototype.myBind = function (context, ...bindArgs) {
    if (typeof this !== "function") {
        throw new TypeError("myBind must be called on a function");
    }
    const originalFn = this;
    console.log(bindArgs)
    function boundFunction(...callArgs) {
        // If called with new
        const isNew = this instanceof boundFunction;
        const finalContext = isNew ? this : context ?? globalThis;
        return originalFn.myApply(finalContext, [...bindArgs, ...callArgs]);
    }
    // Maintain prototype chain for constructor usage
    if (originalFn.prototype) {
        boundFunction.prototype = Object.create(originalFn.prototype);
    }
    return boundFunction;
}

const userDetails2 = getUserDetails.myBind(user3, 'Delhi');
// console.log(userDetails2)
userDetails2(482002);


const obj = {
    name: "Sumit",
    greet: () => {
        console.log(this.name);
    }
};

// obj.greet();


// OOPS CONCEPTS (IGNORE IT)
// constructor function is used to share functions amongest the objects, since same function were taking memory while creating different objects
// WHich is also known as factory functions

// When calling a function with new keyword it's called constructor function because it returns object pointing to this object of function