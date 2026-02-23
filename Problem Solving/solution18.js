// 1️⃣ Print All Elements of an Array Using Recursion
function printAllNumber(arr, i=0){
    console.log(arr[i++])
    if(i == arr.length) return
    return printAllNumber(arr, i)  // return is not needed
}
printAllNumber([1, 2, 3, 4])
// [1, 2, 3, 4]

// 2️⃣ Find the Sum of All Elements in an Array Using Recursion
function printSumOfArray(arr, i=0, sum=0){
    // console.log(arr[i++])
    if(i == arr.length) return sum;
    sum+=arr[i++]
    return printSumOfArray(arr, i, sum)
}
console.log(printSumOfArray([2, 4, 6, 8]))
// [2, 4, 6, 8]

// 3️⃣ Check if an Array Is Sorted (Ascending) Using Recursion
function isArraySorted(arr, i=0){
    
    if(i == arr.length-1) return true;
    if(arr[i] < arr[i+1]) i++;
    else return false;
    return isArraySorted(arr,i);
}

console.log(isArraySorted([1, 2, 3, 5, 4]))
console.log(isArraySorted([1, 2, 3, 4, 5]))

// 4️⃣ Reverse a String Using Recursion
function reverseString(str){
    
    function helper(str, i = str.length, revStr = '') {
        if (i < 0) return revStr;
        revStr+= str.charAt(i);
        i--;
        return helper(str, i, revStr)
    }
    return helper(str)
}

console.log(reverseString("hello"))

// 5️⃣ Check if a String Is Palindrome Using Recursion
function palindromeString(str){
    
    function helper(str, i = str.length, revStr = '') {
        if (i < 0) return revStr;
        revStr+= str.charAt(i);
        i--;
        return helper(str, i, revStr)
    }
    return str === helper(str) ? 'Palindrome' : 'Not Palindrome'
}

console.log(palindromeString("madam"))


// HomeWork 
// 1️⃣ Find the Length of a String Using Recursion

function findLengthOfStr(str, i=0){
    if(str.charAt(i)=== '') return i
    i++;
    return findLengthOfStr(str,i)
}

console.log(findLengthOfStr('ab a cd'))

// 2️⃣ Count the Number of Vowels in a String Using Recursion
function numberOfVowels(str,i=0,count=0){
    if(str.length === i) return count;
    if(['a','e','i','o','u','A','E','I','O','U'].includes(str.charAt(i))) count++;
    i++;
    return numberOfVowels(str, i, count)
}

console.log(numberOfVowels('education'));

// 3️⃣ Find the First Occurrence of an Element in an Array Using Recursion

function firstOccurenceOfEl(arr,el,i=0){
    if(arr.length === i) return -1;
    if(arr[i] === el) return i;
    i++;
    return firstOccurenceOfEl(arr,el,i);
}

console.log(firstOccurenceOfEl([5, 3, 7, 3, 9], 9))

// 4️⃣ Find the Last Occurrence of an Element in an Array Using Recursion
function lastOccurenceOfEl(arr,el,i=arr.length-1){
    if(0 === i) return -1;
    if(arr[i] === el) return i;
    i--;
    return lastOccurenceOfEl(arr,el,i);
}

console.log(lastOccurenceOfEl([5, 3, 7, 3, 9], 3))

// 5️⃣ Count How Many Times a Character Appears in a String Using Recursion
function numOfSpecificChar(str,char,i=0, count=0){
    if(str.length === i) return count;
    if(str.charAt(i) === char) count++;
    i++;
    return numOfSpecificChar(str, char, i, count)
}

console.log(numOfSpecificChar("recursion",'r'))

// 6️⃣ Replace All Occurrences of a Character in a String Using Recursion
function replaceAllOcc(str, char, replaceChar, i =0, replacedStr=''){
    if(str.length === i) return replacedStr;
    if(str.charAt(i) === char) replacedStr+= replaceChar
    else replacedStr+= str.charAt(i);
    i++;
    return replaceAllOcc(str, char, replaceChar, i, replacedStr)
}

console.log(replaceAllOcc('banana','a','x'))

// 7️⃣ Check if All Elements in an Array Are Even Using Recursion
function checkIfAllEleArr(arr, i=0){
    if(arr.length === i) return true;
    if(arr[i]%2 !== 0) return false;
    i++;
    return checkIfAllEleArr(arr, i)
}

console.log(checkIfAllEleArr([2, 4, 6, 8]));
console.log(checkIfAllEleArr([2, 4, 6, 8, 9]));

// 8️⃣ Find the Maximum Element in an Array Using Recursion
function maxEl(arr, i =0,max=arr[0]){
    if(max < arr[i+1]) max = arr[i+1]
    if(arr.length-1 === i) return max;
    i++;
    return maxEl(arr, i, max)
}

console.log(maxEl([7, 3, 9, 10, 5]))
console.log(maxEl([7, 3, 9, 2, 5]))