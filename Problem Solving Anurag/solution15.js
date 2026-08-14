function binSerachAsec(arr, el){
    let start = 0;
    let end = arr.length - 1;
    // let end = arr.length; does not matter since if it is a only one element, mid will still point 0 due to floor.

    while(start <= end ){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === el){
            return mid;
        }else if(arr[mid] > el){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}
console.log(binSerachAsec([1, 3, 5, 7, 9], 9));
// [1, 3, 5, 7, 9]

// 2️⃣ Find the First Occurrence of a Repeated Number
function binarySearchFirst(arr, el){
    let start = 0;
    let end = arr.length - 1;
    let firstOccurence = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === el) {
            firstOccurence = mid;
            end = mid - 1;
        } else if (arr[mid] > el) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return firstOccurence;
}

console.log(binarySearchFirst([2, 4, 4, 4, 9, 11, 11, 15 , 15, 15], 15));

// 3️⃣ Find the Last Occurrence of a Repeated Number

function binarySearchLast(arr, el){
    let start = 0;
    let end = arr.length - 1;
    let LastOccurence = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === el) {
            LastOccurence = mid;
            start = mid + 1;
        } else if (arr[mid] > el) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return LastOccurence;
}

console.log(binarySearchLast([2, 4, 4, 4, 9, 11, 11, 15 , 15, 15], 15));

// Homework Question
// 1️⃣ Find the Smallest Element Greater Than a Given Value

function binSerachGreaterThanGivenValue(arr, el){
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while(start <= end ){
        mid = Math.floor((start + end) / 2);

        if(arr[mid] < el && arr[mid+1] > el){
            return arr[mid+1];
        }else  if(arr[mid] > el){
            end = mid - 1;
        }else{
            start = mid + 1;
        }

    }
    return arr[mid];
}
console.log(binSerachGreaterThanGivenValue([3, 5, 8, 12, 17, 25, 30], 20))
console.log(binSerachGreaterThanGivenValue([1, 3, 5, 8, 12, 17], 4))

// 2️⃣ Find the Greatest Element Smaller Than a Given Value

function binSerachSmallerThanGivenValue(arr, el){
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while(start <= end ){
        mid = Math.floor((start + end) / 2);

        if(arr[mid] >= el && arr[mid-1] < el){
            return arr[mid-1];
        }else  if(arr[mid] >= el){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return arr[mid];
}

console.log(binSerachSmallerThanGivenValue([3, 5, 8, 12, 17], 6))
console.log(binSerachSmallerThanGivenValue([3, 5, 8, 12, 17, 25, 30], 20))

// 3️⃣ Check If a Number Is a Perfect Square Using Binary Search

function binSearchNumberIsPerfectSquare(arr, el){
    let start = 0;
    let end = arr.length - 1;
    // let end = arr.length; does not matter since if it is a only one element, mid will still point 0 due to floor.

    while(start <= end ){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === el){
            return Number.isInteger(Math.sqrt(arr[mid]));
        }else if(arr[mid] > el){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}
console.log(binSearchNumberIsPerfectSquare([4, 5, 9 , 10, 36, 64],36))

// Find the Peak Element in a Mountain Array (Binary Search Variant)
function binSerachFindPeak(arr){
    let start = 0;
    let end = arr.length - 1;
    // let end = arr.length; does not matter since if it is a only one element, mid will still point 0 due to floor.

    while(start <= end ){
        let mid = Math.floor((start + end) / 2);
        if((arr[mid-1] < arr[mid]) && (arr[mid] > arr[mid+1])){
            return {peak: arr[mid], index: mid};
        }else if(arr[mid] < arr[mid+1]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}

console.log(binSerachFindPeak([1, 3, 5, 7, 8, 4, 2]));
console.log(binSerachFindPeak([5, 6, 8, 10, 12,21, 50,4, 3, 1, 0]));

// 5️⃣ Binary Search in a Descending Sorted Array

function binSerachDsec(arr, el){
    let start = 0;
    let end = arr.length - 1;
    // let end = arr.length; does not matter since if it is a only one element, mid will still point 0 due to floor.

    while(start <= end ){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === el){
            return mid;
        }else if(arr[mid] < el){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}

console.log(binSerachDsec([100, 90, 70, 40, 10, 5, 2, 1], 1));

// 6️⃣ Count How Many Times an Element Appears (Using Binary Search Twice)
function twiceBinFreqOfEl(arr, el){
    let start = 0;
    let end = arr.length - 1;
    let count = 0;
    let nextMid;

    while(start <= end ){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === el){
            if(count == 0) nextMid = mid
            count = nextMid - mid + 1;
            end = mid - 1;
        }else if(arr[mid] > el){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }


    let nextCount = 0;
    start = nextMid+1; end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === el) {
            if(nextCount == 0) nextMid = mid
            if(arr[start] === el){
                nextCount = nextCount+ mid - start + 1
            }
            start = mid + 1;
        } else if (arr[mid] > el) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return count + nextCount;
}

console.log(twiceBinFreqOfEl([1, 2, 2, 2, 3, 3, 4, 4,4,4, 4, 4], 4))
console.log(twiceBinFreqOfEl([1, 2, 2, 2, 3, 3, 4, 4], 2))
// [1, 2, 2, 2, 3, 3, 4]

// 7️⃣ Search for a Character in a Sorted String Using Binary Search
function binSearchInStr(str, el){
    let start = 0;
    let end = str.length - 1;

    while(start <= end ){
        let mid = Math.floor((start + end) / 2);
        if(str.charCodeAt(mid) === el.charCodeAt(0)){
            return mid;
        }else if(str.charCodeAt(mid) > el.charCodeAt(0)){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}

// "aabbccddeefg"
console.log(binSearchInStr("aabbccddeefg", 'b'));

// 8️⃣ Find the Index Where an Element Should Be Inserted (Lower Bound)

function binSearchTobeInserted(arr, el){
    let start = 0;
    let end = arr.length - 1;
    // let end = arr.length; does not matter since if it is a only one element, mid will still point 0 due to floor.

    while(start <= end ){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] < el && arr[mid+1] > el ){
            return mid+1;
        }else if(arr[mid] > el){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}

console.log(binSearchTobeInserted([1, 3, 5, 7, 9], 8))