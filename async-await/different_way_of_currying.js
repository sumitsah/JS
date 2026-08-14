// function multiplyNormal(x, y, z) {
//     return x * y * z
// } 

// multiply(2, 3, 5)

// mutiply untill last function call argument is empty eg. multiply(2)(3)()  => recursive pattern
function multiply(x) {
    return function (y) {
        if (y) return multiply(x * y)
        return x
    }
}

// multiply(2)(3)(5)
multiply(2)(3)
console.log(multiply(2)(3)(5)(6)())

// ===============================================================
// Multiply by N pattern
function multiplyByTwo(x) {
    return x * 2
}

function multiplyByFour(x) {
    return x * 4
}

function multiplyByNine(x) {
    return x * 9
}

function multiplyByN(x) {
    return function (y) {
        return x * y
    }
}

const multiplyByFour = multiplyByN(4)
console.log(multiplyByFour(5))
// ===============================================================

/* Using bind method

function multiply(a, b) {
    return a * b
}

const multiplyByTwo = multiply.bind(this, 2) 
*/

// ===============================================================

function curry(fn) {
    return function curried(...args) {
        console.log(args)
        // Have we received enough arguments?
        if (args.length >= fn.length) {
            return fn(...args);
        }

        // Otherwise collect more
        return function (...nextArgs) {
            console.log(args, nextArgs)
            return curried(...args, ...nextArgs);
        };
    };
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

// console.log(curriedAdd(1)(2))
console.log(curriedAdd(1, 2)(3, 4))

// console.log(curriedAdd(1)(2)(3));     // 6
// console.log(curriedAdd(1, 2)(3));     // 6
// console.log(curriedAdd(1)(2, 3));     // 6
// console.log(curriedAdd(1, 2, 3));  