console.log(" == Print Fibonacci Series up to N Terms == ")
function printFibonacci(n){
    let fibonacci = [0,1]
    if(n === 1)
        return [0];
    if(n === 2)
        return fibonacci
    for(let i = 2; i < n; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
    }
    return fibonacci;
}
console.log(printFibonacci(10))

console.log("== Find the Nth Fibonacci Number == ")
function findNthFibonacci(n){
  return printFibonacci(n).pop();
}
console.log(findNthFibonacci(2))

console.log("=== Check if a Number Belongs to the Fibonacci Series === ")

function isFibonacciNumber(numberToBeFind){
    let fibonacci = [0,1], i = 2;
    while(i !== 100){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        if(fibonacci[i] === numberToBeFind)
            return true
        i++;
    }
    return false;
}
console.log(isFibonacciNumber(346))

function belongToFibonacci(num) {
  return (
    Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
  );
}
console.log(belongToFibonacci(346))
// HOMEWORK
// 1. Print All Prime Numbers up to N
function isPrime(num) {
  let factorsCount = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factorsCount++;
      const otherPair = num / i;
      if (i !== otherPair) factorsCount++;
    }
  }

  return factorsCount === 2;
}

function printPrime(n){
    for(let i = 1; i<= n; i++){
        if(isPrime(i)) console.log(i)
    }
}

printPrime(20)
// 2. Sum of All Prime Numbers till N

function sumOfPrime(n){
    let sum = 0;
    for(let i = 1; i<= n; i++){
        if(isPrime(i)) sum = sum + i
    }
    return sum
}

console.log("Sum of all prime up to 10 is ", sumOfPrime(10))

// 4. Print All Fibonacci Numbers up to a Given Limit

function printFibonacciUptoLimit(limit) {
    let fibonacci = [0, 1, 1]
    if (limit === 0)
        return [0];
    if (limit === 1)
        return fibonacci
    for (let i = 3; i < limit; i++) {
        if (limit >= fibonacci[i - 1] + fibonacci[i - 2]) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
        } else {
            return fibonacci;
        }
    }
}
console.log(printFibonacciUptoLimit(100))

// let a = start / ((1 + Math.sqrt(5)) / 2);
// let pre = Math.round(a);
// 5. Generate Fibonacci Numbers Within a Range
function generateFibonacciInRange(start, end){
    let fibonacci = printFibonacciUptoLimit(start);
    let series = []
    series[0] = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    series[1] = series[0] + fibonacci[fibonacci.length - 1];
    for(let i = 2 ; ; i++){
        if( series[i - 1] + series[i - 2] < end ){
            series[i] = series[i - 1] + series[i - 2]
        }else{
            return series;
        }
    }
}

console.log(generateFibonacciInRange(35,1000))

// 7. Check if the Sum of Two Consecutive Fibonacci Numbers is Prime
console.log(isPrime(5 + 8))

// 8. Print First N Prime Fibonacci Numbers

// not suitable
function nPrimeFibonacciNumber(n){
   let fibonacci = printFibonacci(n);
   let primeFibonacci = [];
   for (let i = 0; i < fibonacci.length; i++) {
    if(isPrime(fibonacci[i])){
        primeFibonacci.push(fibonacci[i])
    }
   }
   return primeFibonacci;
}

console.log(nPrimeFibonacciNumber(10))

// Suitable
function printnPrimeFibonacci(n) {
    let fibonacci = [0, 1, 1]
    let primeFibonacci = [];
    for (let i = 3, j = 1; j <= n ; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
        if (isPrime(fibonacci[i])) {
            primeFibonacci.push(fibonacci[i])
            j++
        }
    }
    return primeFibonacci;
}

console.log(printnPrimeFibonacci(10))