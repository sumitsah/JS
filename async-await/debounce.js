/* 
Debouncing is a technique that ensures an operation (a function) is executed 
only after a certain period of time has elapsed since the last event trigger.
*/

const input = document.querySelector('input');

// Below debounce implementation alongwith 'this' context set
// this is the mmodern approach and perfectely fine with interview
// key points : arrow function inside setTimout and rest parameters ..args
// which is a substitute of context = this and args = arguments in traditional JS approach
function debounce(fn, delay = 300) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args);
            // fn(e);
        }, delay)
    }
}

// const fetchResults = debounce(callApi, 300)

input.addEventListener('input', debounce(callApi, 300))

function callApi(e) {
    console.log(this);
    console.log(e.target.value)
    console.log('Result...')
}


// Below debounce implementation is correct except 'this' context is not set
// const inputElement = document.querySelector('input');

// const debounce = (func, wait) => {
//     let timerId
//     return (e) => {
//         clearTimeout(timerId)
//         // console.log(timerId)
//         timerId = setTimeout(() => {
//             func(e)
//         }, wait);
//     }
// }

// const callApi = (e) => {
//     console.log(e.target.value)
// }

// console.log(debounce(callApi, 500))

// inputElement.addEventListener('input', debounce(callApi, 500))
// inputElement.addEventListener('input',(e) =>{
//     callApi(e)
//    } )
