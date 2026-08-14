// Selection sort in ascending order
function selectionSortInAsce(arr){
    for(let i = 0; i< arr.length ; i++){
        let indexOfMin = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[indexOfMin] > arr[j]){
                indexOfMin = j;
            }
        }
        [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
    return arr;
}

console.log(selectionSortInAsce([7, 2, 9, 4, 1]))

// Sort an array in Descending order
function selectionSortInDescen(arr){
    for(let i = 0; i< arr.length ; i++){
        let indexOfMax = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[indexOfMax] < arr[j]){
                indexOfMax = j;
            }
        }
        [arr[i], arr[indexOfMax]] = [arr[indexOfMax], arr[i]];
    }
    return arr;
}

console.log(selectionSortInDescen([7, 2, 9, 4, 1]))
console.log(selectionSortInDescen([3, 8, 5, 2, 9]))
console.log(selectionSortInAsce([9, 4, 7, 1, 3]));

// Find the Kth Smallest Element Using Selection Logic
function selectionSortKthSmallestEl(arr, k){
    for(let i = 0; i< arr.length ; i++){
        let indexOfMin = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[indexOfMin] > arr[j]){
                indexOfMin = j;
            }
        }
        [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
        if(i === (k-1) ) {return arr[i]}
    }
    console.log(arr)
    return -1;
} 

console.log(selectionSortKthSmallestEl([9, 4, 7, 1, 3],3))

// 4️⃣ Selection Sort but Track Index of Minimum for Each Pass
function selectionSortInAsceTrackminIndex(arr){
    for(let i = 0; i< arr.length - 1; i++){
        let indexOfMin = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[indexOfMin] > arr[j]){
                indexOfMin = j;
            }
        }
        console.log(indexOfMin);
        [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
    return arr;
}

console.log(selectionSortInAsceTrackminIndex([4, 2, 5, 3, 1]))

// =======================

function selectionSortAscTackIndex(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    console.log(`Pass ${i + 1} → min index = ${minIndex}`);
  }

  return arr;
}

console.log(selectionSortAscTackIndex([7, 2, 9, 4, 1]));

// 5️⃣ Sort an Array of Objects by Name
function selectionSortInAsceInObj(arr){

    for(let i = 0; i< arr.length ; i++){
        let indexOfMin = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[indexOfMin].name[0].toLowerCase() > arr[j].name[0].toLowerCase()){
                indexOfMin = j;
            }
        }
        [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
    return arr;
}

console.log(selectionSortInAsceInObj([{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }]))

// 1️⃣ Find the K Largest Elements Without Full Sorting
function selectionSortKLargestEl(arr, k ){
    for(let i = 0; i< arr.length ; i++){
        let indexOfMax = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[indexOfMax] < arr[j]){
                indexOfMax = j;
            }
        }
        [arr[i], arr[indexOfMax]] = [arr[indexOfMax], arr[i]];
        if( k-1 === i) return arr.slice(0,k);
    }
    return arr;
}

console.log(selectionSortKLargestEl([5, 1, 9, 3, 7], 2))

// 2. Sort a 2D Array by Second Element in Each Subarray
function selectionSort2DarrayBySecondEl(arr){
    for(let i = 0; i< arr.length ; i++){
        // debugger
        let indexOfMin = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[indexOfMin][1] > arr[j][1]){
                indexOfMin = j;
            }
        }
        [arr[i],arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
    return arr;
}

console.log(selectionSort2DarrayBySecondEl([[3, 9], [1, 4], [2, 5]]))

// 3️⃣ Sort an Array and Count How Many Times Minimum Changed

function selectionSortNoOfMinFound(arr){
    let newMin = 0;
    for(let i = 0; i< arr.length ; i++){
        let indexOfMin = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[indexOfMin] > arr[j]){
                indexOfMin = j;
                newMin++;
            }
        }
        [arr[i],arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
    return newMin;
}

console.log(selectionSortNoOfMinFound([8, 3, 5, 2, 6]))

// [2, 3, 5, 8, 6])

// 4️⃣ Sort Only Elements at Even Indexes

function selectionSortOnlyEvenInx(arr){
    let arrEvenIndex = arr.filter((item, i)=> {
        if(i === 0 || i%2 === 0){
            return item;
         }
        });
    
    for(let i = 0; i< arrEvenIndex.length ; i++){
        let indexOfMin = i;
        for(let j=i+1; j < arrEvenIndex.length; j++){
            if(arrEvenIndex[indexOfMin] > arrEvenIndex[j]){
                indexOfMin = j;
            }
        }
        [arrEvenIndex[i],arrEvenIndex[indexOfMin]] = [arrEvenIndex[indexOfMin], arrEvenIndex[i]];
    }

    let temp = 0;
    arr.forEach((el,i) => {
        if(i === 0 || i%2 === 0){
            arr[i] = arrEvenIndex[temp++];
         }
    });
    return arr;
}

console.log(selectionSortOnlyEvenInx([9, 4, 7, 6, 3, 2]))

// 5️⃣ Sort an Array of Characters by ASCII Value
function selectionSortByCharASCII(arr){
    for(let i = 0; i< arr.length ; i++){
        let indexOfMin = i;
        for(let j=i+1; j < arr.length; j++){
            if(arr[indexOfMin].toLowerCase() > arr[j].toLowerCase()){
                indexOfMin = j;
            }
        }
        [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
    return arr;
}

console.log(selectionSortByCharASCII(['d', 'A', 'c', 'B']));