const inputElement = document.querySelector('input');
const span = document.querySelector('h2 span');

// const callApi = () => {
//     span.innerText = ++span.innerText;
// }
const callApi = (e) => {
    // console.log(this)
    // console.log(e.target.value)
    console.log('result..')
}

const throttle = (func, delay) => {
    let firstCall = true;
    let timerId = null;
    return function (...args) {
        if (firstCall) {
            func(...args);
            // func.apply(this,args);
            firstCall = false;
            return
        }
        if (timerId) return
        timerId = setTimeout(() => {
            timerId = null;
            func(...args)
            // func.apply(this,args);
        }, delay);
    }
}

// document.addEventListener('mousemove', throttle(callApi, 200))

// Throttle for input 
inputElement.addEventListener('input', throttle(callApi, 500));

/* 

Event Bubbling
Event propagation from the target element up through its ancestor elements.

Event Capturing
Event propagation from the root element down to the target element.

Event Delegation
A pattern that uses a parent element's event listener to handle events for its child elements through event bubbling.

Debouncing
A technique that delays function execution until a specified period of inactivity has passed.

Throttling
A technique that limits function execution to at most once within a specified time interval.

Throttling is a technique that ensures a function can only be executed once in a specified time period. 
*/

// window.addEventListener('resize', callApi);
// window.addEventListener('resize', myThrottle(callApi, 300));

const customCursor = document.querySelector('.custom-cursor');

// Do not use arraow function because this context will be ignored as this will be evaluated lexically
// const move = (e) => {
//     customCursor.style.left = `${e.clientX}px`
//     customCursor.style.top = `${e.clientY}px`
//     console.log(this)
// }

function move(e) {
    customCursor.style.left = `${e.clientX}px`
    customCursor.style.top = `${e.clientY}px`
    // console.log(this)
}

// document.addEventListener('mousemove', move)
document.addEventListener('mousemove', myThrottle(move, 200))

function myThrottle(fn, limit) {
    let flag = true;

    return function (...args) {
        if (flag) {

            fn.apply(this, args);
            flag = false;

            setTimeout(() => {
                flag = true;
            }, limit)
        }
    }
} 