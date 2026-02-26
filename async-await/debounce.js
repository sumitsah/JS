const inputElement = document.querySelector('input');

const debounce = (func, wait) => {
    let timerId
    return (e) => {
        clearTimeout(timerId)
        // console.log(timerId)
        timerId = setTimeout(() => {
            func(e)
        }, wait);
    }
}

const callApi = (e) => {
    console.log(e.target.value)
}

console.log(debounce(callApi, 500))

inputElement.addEventListener('input', debounce(callApi, 500))
// inputElement.addEventListener('input',(e) =>{
//     callApi(e)
//    } )
