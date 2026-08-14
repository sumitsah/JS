/* const GITHUB_API = 'https://api.github.com/users/sumitsah'

const user = fetch(GITHUB_API);

console.log(user) */

// CReating a Promise
/* const cart = ['shoes', 'kurta', 'pants'];
const promise = createOrder(cart);

promise.then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId)
})
    .catch(function (err) {
        console.log(err.message)
    })

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // createOrder => Validate Cart => orderId
        if (!validateCart(cart)) {
            const err = new Error('Cart is not valid')
            reject(err);
        }
        // Logic for create order
        const orderId = '12345';
        if (orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 5000)
        }
    })

    return pr;
}

function validateCart(cart) {
    return !true;
} */


// Promise static methods

// Promise.all() fulfills
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('P1 Successful'), 3000)
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('P2 Successful'), 1000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('P3 Successful'), 2000)
// })

// console.log(Promise.all([p1, p2, p3]))

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res)
// })

// Promise.all() rejects
/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 Successful'), 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('P2 Fail'), 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P3 Successful'), 2000)
})

console.log(Promise.all([p1, p2, p3]))

Promise.all([p1, p2, p3]).then(res => {
    console.log(res)
}).catch((err) => console.log(err)) */

/* // Promise.allSettled() Fulfilled
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 Successful'), 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P2 Successful'), 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P3 Successful'), 2000)
})

console.log(Promise.all([p1, p2, p3]))

Promise.allSettled([p1, p2, p3]).then(res => {
    console.log(res)
}).catch((err) => console.log(err))
 */

// Promise.allSettled() Failure
/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 Successful'), 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('P2 Fail'), 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P3 Successful'), 2000)
})

console.log(Promise.all([p1, p2, p3]))

Promise.allSettled([p1, p2, p3]).then(res => {
    console.log(res)
}).catch((err) => console.log(err)) */


// Promise.race() settled
/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 Successful'), 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P2 Successful'), 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P3 Successful'), 2000)
})

console.log(Promise.all([p1, p2, p3]))

Promise.race([p1, p2, p3]).then(res => {
    console.log(res)
}).catch((err) => console.log(err)) */

// Promise.race() settled with reject
/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 Successful'), 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('P2 fail'), 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P3 Successful'), 2000)
})

console.log(Promise.all([p1, p2, p3]))

Promise.race([p1, p2, p3]).then(res => {
    console.log(res)
}).catch((err) => console.log(err)) */


/* // Promise.any() fulfills
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 Successful'), 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P2 Successful'), 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P3 Successful'), 2000)
})

console.log(Promise.all([p1, p2, p3]))

Promise.any([p1, p2, p3]).then(res => {
    console.log(res)
}).catch((err) => console.log(err)) */

/* // Promise.any() fulfills
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 Successful'), 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('P2 Fail'), 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P3 Successful'), 2000)
})

console.log(Promise.all([p1, p2, p3]))

Promise.any([p1, p2, p3]).then(res => {
    console.log(res)
}).catch((err) => console.log(err)) */


// Promise.any() rejects
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject('P1 Fail'), 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('P2 Fail'), 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('P3 Fail'), 2000)
})

console.log(Promise.all([p1, p2, p3]))

Promise.any([p1, p2, p3]).then(res => {
    console.log(res)
}).catch((err) => {
    console.log(err)
    console.log(err.errors)
})
