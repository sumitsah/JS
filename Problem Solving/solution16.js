// Find Factorial of a number
function factorial(num){
    if(num === 1 || num === 0)
        return num
    return num * factorial(num-1);
    
}
console.log(factorial(5))

// 4️⃣ Find the Sum of First N Natural Numbers Using Recursion
function sumOfNaturalNumber(n){
    if(n === 1) return 1;
    return n + sumOfNaturalNumber(n-1);
}
console.log(sumOfNaturalNumber(4));

// 5️⃣ Calculate Power Using Recursion
function calculatePower(a, n){
    if(n === 0) return 1;
    return a * calculatePower(a, n-1)
}

//  a = 2, n = 5    
console.log(calculatePower(2, 3))

// ////////////////////////////////////////////////////////////////////////////////////////
// Home Work 
// 1️⃣ Find the Sum of Digits of a Number Using Recursion
function findSumOfDIgits(n) {
    if (n === 0) return 0;

    let num = n;
    num = num % 10;
    n = Math.floor(n / 10);
    return num + findSumOfDIgits(n)
}

console.log(findSumOfDIgits(123))

// 2️⃣ Reverse a Number Using Recursion
function reverseNumber(n){
    if(n === 0) return null;

    let num = n;
    let count = Math.floor(Math.log10(num));
    num = num % 10;
    n = Math.floor(n / 10);
    return (num * 10**count) + reverseNumber(n);
}

console.log(reverseNumber(88943))
console.log(reverseNumber(121))

// 3️⃣ Find the Product of Digits of a Number Using Recursion
function findProductOfDIgits(n) {
    if (n === 0) return 1;

    let num = n;
    num = num % 10;
    n = Math.floor(n / 10);
    return num * findProductOfDIgits(n)
}

console.log(findProductOfDIgits(234))

// 4️⃣ Check if a Number is Palindrome Using Recursion
function isPalindrome(n){
    
    // let num = n;
    // num = num % 10;
    // n = Math.floor(n / 10);
    // console.log(num)

    // if( n !== 0 ) {
    //     return num == isPalindrome(n)
    // }else{
    //     return num
    // }
    if(reverseNumber(n) === n) 
        return true
    else return false
    
    
}

console.log(isPalindrome(1212))

function isPalindromeNumber(num) {
  function helper(n, rev = 0) {
    if (n === 0) return rev;
    return helper(Math.floor(n / 10), rev * 10 + (n % 10));
  }

  return num === helper(num);
}

console.log(isPalindromeNumber(121))

function isPalindromeNumber1(num) {
  function helper(n, rev = 0) {
    if (n === 0) return rev;
    return helper(Math.floor(n / 10), rev * 10 + (n % 10));
  }

  return num === helper(num);
}

// 5️⃣ Count How Many Zeros Are Present in a Number Using Recursion
function numberOfZeros(num) {
    function helper(n, count = 0) {
        
        let num1 = n;
        num1 = num1 % 10;
        n = Math.floor(n / 10);
        if(num1 === 0) count++;
        if(n === 0) return count;
        
        return helper(n, count);
    }
    return helper(num)
}

// 102030
console.log(numberOfZeros(10203040))
console.log('=============')

// 6️⃣ Print All Natural Numbers Between Two Given Numbers Using Recursion
function printAllNaturalNumbers(start, end){

    if(start > end) return
    console.log(start)
    start++;
    return printAllNaturalNumbers(start, end)
}

// start = 3, end = 8
printAllNaturalNumbers(3,8)

// 7️⃣ Find the Sum of Even Numbers from 1 to N Using Recursion
function sumOfEvenNumber(n, sum = 0, num=0){
    if(num%2 === 0) sum+=num;
    num++
    if(num > n) return sum;
    return sumOfEvenNumber(n, sum, num);
}

console.log(sumOfEvenNumber(20))