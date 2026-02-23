// 1️⃣ Sort an Array in Ascending Order Using Bubble Sort
function bubbleSortAscen(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}
console.log(bubbleSortAscen([5, 3, 8, 4, 2]));


// 2️⃣ Sort an Array in Descending Order Using Bubble Sort
function bubbleSortDecen(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] < arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}
console.log(bubbleSortDecen([5, 3, 8, 4, 2]));

// 3️⃣ Sort a String Alphabetically Using Bubble Sort Logic
function bubbleSortAlphabetically(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j].toLowerCase() > arr[j+1].toLowerCase()){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr.join('');
}
console.log(bubbleSortAlphabetically('javascript'));
console.log(bubbleSortAlphabetically('JavaScript'));

// 4️⃣ Sort an Array and Count the Number of Swaps Performed
function bubbleSortNoOfSwaps(arr) {
    let swapsCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapsCount++;
            }
        }
    }
    return swapsCount;
}
console.log(bubbleSortNoOfSwaps([4, 3, 2, 1]));
console.log(bubbleSortNoOfSwaps([5, 1, 4, 2, 8]));

// 1️⃣ Sort an Array of Objects by Age (Ascending)
function bubbleSortAscenObj(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j].age > arr[j+1].age){
                [arr[j].age, arr[j+1].age] = [arr[j+1].age, arr[j].age]
            }
        }
    }
    return arr;
}

console.log(bubbleSortAscenObj([
  { name: "A", age: 25 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
]))

// 2️⃣ Sort an Array but Keep Zeros at the End (Zeros Fixed)

function moveAllZerosToEnd(arr){
    let pos = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] !== 0 ){
            arr[pos] = arr[i];
            pos++; 
        }
    }

    let length = pos;

    while(pos < arr.length){
        arr[pos] = 0;
        pos++;
    }

    // [3, 5, 2, 1, 0, 0]
    return {length, arr};
}

function bubbleSortZeroFixed(zeroFixedArr) {
    let {length, arr} = moveAllZerosToEnd(zeroFixedArr);

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}
console.log(bubbleSortZeroFixed([3, 0, 5, 0, 2, 1, 0, 8]));

// 3️⃣ Sort an Array and Track How Many Comparisons Were Made

function bubbleSortComparisons(arr) {
    let comarisonCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            comarisonCount++;
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return comarisonCount;
}
console.log(bubbleSortComparisons([5, 1, 4, 2, 8]));

// 6️⃣ Sort an Array in Ascending Order but Stop After K Passes
function bubbleSortOnlyKpass(arr, k) {
    for (let i = 0; i < k ; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSortOnlyKpass([5, 4, 3, 2, 1], 2));
console.log(bubbleSortOnlyKpass([5, 4, 3, 2, 1], 3));

// 7️⃣ Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)
// [9, 4, 2, 7, 6, 5]
// [9, 2, 4, 7, 6, 5]

// [9, 4, 2, 10, 7, 6, 5]
// [9, 2, 4, 10, 7, 6, 5]
function bubbleSortEven(arr) {
    let pos = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        pos = 0;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // pos = j;
            if(arr[pos] % 2 === 0){
                if(arr[j+1] % 2 === 0){
                    // pos = j+1;
                    pos++;
                    if(arr[j] > arr[pos]){
                        [arr[j], arr[pos]] = [arr[pos], arr[j]]
                    }
                }
            }
        }
    }
    return arr;
}
// console.log(bubbleSortEven([9, 4, 2, 10, 7, 6, 5]));


function sortOnlyEvens(arr) {
  let evens = arr.filter(n => n % 2 === 0);

  // Bubble sort evens
  for (let i = 0; i < evens.length - 1; i++) {
    for (let j = 0; j < evens.length - 1 - i; j++) {
      if (evens[j] > evens[j + 1]) {
        [evens[j], evens[j + 1]] = [evens[j + 1], evens[j]];
      }
    }
  }

  // Place sorted evens back
  let idx = 0;
  return arr.map(n => (n % 2 === 0 ? evens[idx++] : n));
}

console.log(sortOnlyEvens([9, 4, 2, 7, 6, 5]));
console.log(sortOnlyEvens([9, 4, 2, 10, 7, 6, 5]));

function sortOnlyEvens_InPlace(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {

      // Skip if either element is odd
      if (arr[j] % 2 !== 0 || arr[j + 1] % 2 !== 0) continue;

      // Swap only even pairs
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(sortOnlyEvens_InPlace([9, 4, 2, 7, 6, 5]));
console.log(sortOnlyEvens_InPlace([9, 4, 2, 10, 7, 6, 5]));

function sortOnlyEvens_InPlace_Fixed(arr) {
  // collect indices of even elements (these are the "slots" to sort)
  const evenIdx = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenIdx.push(i);
  }

  // bubble-sort the values at those indices in-place
  const m = evenIdx.length;
  for (let pass = 0; pass < m; pass++) {
    let swapped = false;
    for (let k = 0; k < m - 1 - pass; k++) {
      const i = evenIdx[k];
      const j = evenIdx[k + 1];
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

// demo
const input = [9, 4, 2, 10, 7, 6, 5];
console.log(sortOnlyEvens_InPlace_Fixed(input)); 
// prints: [9, 2, 4, 6, 7, 10, 5]


