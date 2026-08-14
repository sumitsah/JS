// [10, 20, 4, 45, 99]
// Second largest Heap
function secondLargest(arr){
    let secondMax = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length ; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i]
        }
        if((arr[i] > secondMax) && (arr[i] !== max)){
            secondMax = arr[i];
        }
    }
    return {secondMax, max}
}

console.log(secondLargest([10, 20, 504, 45, 99]))
console.log(secondLargest([10, 20, 4, 45, 99]))

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element <= parent) break;

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();
    
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._sinkDown();
    }

    return max;
  }

  _sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let left, right;
      let swap = null;

      if (leftIndex < length) {
        left = this.heap[leftIndex];
        if (left > element) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        right = this.heap[rightIndex];
        if (
          (swap === null && right > element) ||
          (swap !== null && right > left)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

function secondLargest1(arr) {
  const heap = new MaxHeap();
  
  arr.forEach(num => heap.insert(num));

  heap.extractMax(); // Remove largest
  return heap.extractMax(); // This is the second largest
}

// Test
console.log(secondLargest1([10, 5, 20, 8, 15])); // Output: 15

// [4, 5, 3, 1, 2,]
//  reverse(arr, 0, k - 1);
// [5, 4, 3, 1, 2,]

//  reverse(arr, k, arr.length - 1);
// [5, 4, 1, 3, 2]

function rotate(arr, k) {
//   debugger
  k = k % arr.length;
  
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
}

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

rotate([1, 2, 3, 4, 5], 2)

