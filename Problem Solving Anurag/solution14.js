// 1️⃣ Sort an Array in Ascending Order Using Insertion Sort
// [9, 5, 1, 4, 3]
// [5, 9, 1, 4, 3]
// [1, 5, 9, 4, 3]
function insertionSortAscending(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i-1;
        while(j >=0 && arr[j] > curr){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = curr;
    }
    return arr;
}
console.log(insertionSortAscending([9, 5, 1, 4, 3]))

// Sort an Array in Descending Order
function insertionSortDescending(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i-1;
        while(j >=0 && arr[j] < curr){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = curr;
    }
    return arr;
}
console.log(insertionSortDescending([3, 8, 2, 7, 4]))

// 3️⃣ Insert a New Element into an Already Sorted Array (Using Insertion Logic)
function insertAtCorrectPlace(arr, value) {
  arr.push(value);
  let j = arr.length - 2;

  while (j >= 0 && arr[j] > value) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = value;
  return arr;
}

console.log(insertAtCorrectPlace([1, 3, 5, 6], 4));
// [1, 3, 5, 6]
// [1, 4, 3, 5, 6]
// [1, 3, 4, 5, 6]
// 

// 1️⃣ Sort an Array but Keep Odd Numbers Fixed
function insertionSortKeepOddNumbersFixed(arr) {
    let evenIndex = [];
    let evenArray = arr.filter((item, index)=>{
        if(item%2 === 0){
            evenIndex.push(index)
            return item;
        }
    } )
    console.log(evenArray)
    console.log(evenIndex);

    for (let i = 1; i < evenArray.length; i++) {
        let curr = evenArray[i];
        let j = i-1;
        while(j >=0 && evenArray[j] > curr){
            evenArray[j+1] = evenArray[j]
            j--
        }
        evenArray[j+1] = curr;
    }

    for(let i =0; i< evenArray.length; i++){
        arr[evenIndex[i]] = evenArray[i];
    }
    return arr;
}

console.log(insertionSortKeepOddNumbersFixed([9, 4, 7, 6, 3, 2]))

// 2️⃣ Sort an Array Using Insertion Sort but Print Array After Each Pass
function insertionSortPrintAfterEachPass(arr) {
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i-1;
        while(j >=0 && arr[j] > curr){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = curr;
        console.log(arr);
    }
}
insertionSortPrintAfterEachPass([9, 5, 1, 4, 3]);

// 3️⃣ Find the Position Where an Element Should Be Inserted in a Sorted Array
function findInsertPos(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>el){
            return i
        }
    }
    return -1;
}
// [2, 4, 6, 8]
console.log(findInsertPos([2, 4, 6, 8], 5))

// 4️⃣ Check If an Array Becomes Sorted After Inserting One Element
function checkIfArraySortedAfterOneEl(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[4];
        let j = i-1;
        if (arr[j] > curr) {
            let temp = arr[j];
            arr[j] = arr[arr.length - 1]
            arr[arr.length - 1] = temp;
            break;
        }
        
    }
    const isSortedAsc = arr => arr.every((v, i) => i === 0 || v >= arr[i - 1]);
    console.log(arr)
    return isSortedAsc;
}

console.log(checkIfArraySortedAfterOneEl([1, 2, 4, 5, 3]) ? 'Yes' : 'No')