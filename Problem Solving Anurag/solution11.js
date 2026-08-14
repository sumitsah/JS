// Move All Zeroes to End (Stable, O(n))
// [0, 1, 0, 3, 12]
// [1, 0, 0, 3, 12]
// [1, 3, 0, 0, 12]
// [1, 3, 0, 12, 0]

function moveAllZeros(arr) {
    let zeroSequence = true;
    let zeroSequenceCount = 0;
    let zeroSequenceStartIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0 && arr[i + 1] !== 0) {
            if (!zeroSequence ) {
                [arr[zeroSequenceStartIndex], arr[i + 1]] = [arr[i + 1], arr[zeroSequenceStartIndex]];
                zeroSequenceStartIndex = i;
            }else{
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                // zeroSequence = true;
            }
        } else if (zeroSequence) {
            zeroSequence = false;
            zeroSequenceStartIndex = i;
        }
    }
    if (!zeroSequence) {
        [arr[zeroSequenceStartIndex], arr[arr.length - 1]] = [arr[arr.length - 1], arr[zeroSequenceStartIndex]];
    }

    return arr;
}

console.log(moveAllZeros([0, 1, 0, 3, 12]));
console.log(moveAllZeros([0, 1, 0, 2, 0, 3, 12]));


function moveAllZerosToEnd(arr){
    let pos = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] !== 0 ){
            arr[pos] = arr[i];
            pos++; 
        }
    }
    
    while(pos < arr.length){
        arr[pos] = 0;
        pos++;
    }
    return arr;
}

console.log(moveAllZerosToEnd([0, 1, 0, 3, 12]));
console.log(moveAllZerosToEnd([0, 1, 0, 2, 0, 3, 12]));

// Find the First Repeating Element in an Array

function firstRepeatingElement(arr){
    let obj = arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0 ) + 1;
        return acc
    }, {})

    let repeatArray = [];
    Object.entries(obj).forEach(([key,value]) =>{
        if( value > 1){
            repeatArray.push(key)
        }
    })
    // console.log(repeatArray)

    let index = [];
    for(let i = 0; i < repeatArray.length ; i++){
      index[i] =  arr.indexOf(+repeatArray[i]);
    }
    // console.log(index)
    // console.log(obj)

    return arr[Math.min(...index)]
}

console.log(firstRepeatingElement([10, 5, 3, 4, 3, 5, 6]));
console.log(firstRepeatingElement([10, 2, 5, 3, 4, 3, 5, 6, 2]));
// ['3', '5']

function getFirstRepeatingEl(arr) {
  const elementExists = {};

  for (const el of arr) {
    if (elementExists[el]) return el;
    elementExists[el] = true;
  }

  return null;
}

console.log(getFirstRepeatingEl([1, 7, 10, 5, 7, 0, 5, 3, 0]));
console.log(getFirstRepeatingEl([10, 5, 3, 4, 3, 5, 6]));


// 4️⃣ Maximum Subarray Sum (Kadane’s Algorithm – O(n))

function maxSubArrSum(arr) {
  let maxSum = -Infinity;
  let currSum = 0;

  for (const n of arr) {
    currSum += n;

    if (currSum > maxSum) {
      maxSum = currSum;
    }

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
}

console.log(maxSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// homework
// 3️⃣ Maximum Subarray (Kadane’s Algorithm – O(n))

function maxSubArr(arr) {
  let maxSum = -Infinity;
  let currSum = 0;
  let maxSubAr = [];

//   debugger
  for (const n of arr) {
    currSum += n;

    if(currSum > 0){
        maxSubAr.push(n);
    }

    if (currSum > maxSum) {
      maxSum = currSum;
    }

    if (currSum < 0) {
      currSum = 0;
      maxSubAr = [];
    }
  }
  return maxSubAr;
}

console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maxSubArray(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;

    let start = 0;
    let tempStart = 0;
    let end = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        // Reset if currentSum becomes negative
        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }

    return arr.slice(start, end + 1);
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Longest Subarray with Sum K
// [1, 2, 3, 4, 5]

// not correct
function longestSubarrayWithSum(arr, k){
  let maxSum = k;
  let currSum = 0;
  let prevLength = 0; let currLength = 0; let start = 0; let end = 0; let left = 0;


  for (let i = 0; i < arr.length; i++) {

    if(currLength !== prevLength ){
      currSum += arr[i];
      currLength++;
    }

    if(currSum > maxSum ){
      currSum -= arr[left];
      left++;
      start = left;
      currLength--;
    }

     if(currSum === maxSum){
      if(prevLength < currLength){
        prevLength = currLength;
        end = i;
      }
    }

  }

  // return prevLength;
  return arr.slice(start, end + 1);
}

// console.log(longestSubarrayWithSum([1, 2, 3, 4, 5], 9))
// console.log(longestSubarrayWithSum([1, 2, 3, 4, 5, 6], 12))

// correct
function longestSubarrayWithSumK(arr, K) {
  const map = new Map(); // prefixSum -> first index
  let prefixSum = 0;
  let maxLen = 0;
  let start = -1, end = -1;
  // debugger
  map.set(0, -1); // important: prefix sum before the array starts

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    // Check if prefixSum - K existed before
    if (map.has(prefixSum - K)) {
      const prevIndex = map.get(prefixSum - K);
      const length = i - prevIndex;

      if (length > maxLen) {
        maxLen = length;
        start = prevIndex + 1;
        end = i;
      }
    }

    // Store prefix sum only first time (to get longest length)
    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }
  return start === -1 ? [] : arr.slice(start, end + 1);
}

console.log(longestSubarrayWithSumK([1, 2, 3, 4, 5], 9))
// console.log(longestSubarrayWithSumK([1, 2, 3, 4, 5, 6], 12))

// 2️⃣ Find the Length of the Longest Subarray with No Repeating Elements
// [1,2,3,1,2,3,4]
function longestSubarrayWithNoRepeatEl(arr){
  const map = new Map();
  // let maxLength = -Infinity;
  // debugger
  for (let i = 0; i < arr.length; i++) {
    if(!map.has(arr[i])){
      map.set(arr[i],i)
    }else{
      map.clear()
      map.set(arr[i],i);
    }
    
    // else{
    //   if(currLength > maxLength){
    //   maxLength = currLength;
    //   currLength = 1;
    //   map.clear();
    // }
    // }
  }

  return map.size;
}

console.log(longestSubarrayWithNoRepeatEl([1,2,3,1,2,3,3,4,5,6,7,8,9]));

// 4️⃣ Find the Longest Increasing Subarray (Continuous)
// [1, 2, 2, 3, 4, 5, 2]
// ((i + 1 < arr.length) ? arr[i] > arr[i-1] : 1)

function longestIncreasingSubarray(arr){
    const map = new Map();
    let subArray = [];
    let prevLength = 0;

    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i]) && (arr[i-1] < arr[i])) {
        map.set(arr[i], i)
        subArray.push(arr[i])
      } else if(map.size < prevLength){
          prevLength = map.size;
          map.clear()
          map.set(arr[i], i);
          subArray = [];
          subArray.push(arr[i])
        }
    }

  return { length: subArray.length, subArray }
}

console.log(longestIncreasingSubarray([1, 2, 2, 3, 4, 5, 9, 1, 2]))