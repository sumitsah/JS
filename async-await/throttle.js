const inputElement = document.querySelector('input');
const span = document.querySelector('h2 span');

// const callApi = () => {
//     span.innerText = ++span.innerText;
// }
const callApi = (e) => {
    // console.log(this)
    console.log(e.target.value)
}

const throttle = (func, delay) => {
    let firstCall = true;
    let timerId = null;
    return (...args) => {
        if(firstCall){
            func(...args);
            // func.apply(this,args);
            firstCall = false;
            return
        }
        if(timerId) return
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