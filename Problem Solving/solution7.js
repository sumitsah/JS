// 1. Find the Prime Factorization (Return as an Array)
function primeFactorization(n){
    let dividend = n;
    let divisor = 2;
    let primeFactorizn = [];
    for (let i = 2; ;) {
        if(Number.isInteger(dividend/divisor)){
            dividend = dividend / divisor;
            primeFactorizn.push(divisor);
        }else{
            i++;
            divisor = i;
        }
        if(dividend === divisor){
            primeFactorizn.push(divisor)
            return primeFactorizn;
        }
    }
}

console.log(primeFactorization(84))
// 2. Factorization in Exponent Form

let primeFactorizn = primeFactorization(30);

const countFrequency = (arr) => {
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
};
console.log(countFrequency(primeFactorizn))
let obj = countFrequency(primeFactorizn);
let primeFactorizationStr = ''
Object.entries(obj).forEach(([key, value], i) => {
    i === 0 ?
    primeFactorizationStr += `${key}^${value}` :   primeFactorizationStr += ` × ${key}^${value}`
});

console.log(primeFactorizationStr)

// 3. Distinct Prime Factor Count
console.log(Object.keys(obj).length)


// Check if a Number Is a Powerful Number
// A number is powerful if every prime factor appears with an exponent ≥ 2.

// Input: N = 36
// Output: Powerful Number (36 → 2² × 3² → all exponents ≥ 2)
function isPowerfulNumber(){
    let isPowerful = true;
    Object.values(obj).forEach((value, i) => {
        if(value < 2)  isPowerful = false;
    });
    return isPowerful;
}

console.log(isPowerfulNumber())

// Class 
// 1. Find the Product of All Distinct Prime Factors
function distinctPrimeFactorProduct(){
    let prod = 1;
    Object.keys(obj).forEach((key, i) =>{
        prod *= key;
    })
    return prod;
}

console.log(distinctPrimeFactorProduct());

// 2. Check if a Number Is a Square-Free Number
function isSquareFreeNumber(){
    let isSquareFree = true;
    Object.values(obj).forEach((value, i) =>{
        if(value > 1) isSquareFree = false;
    })
    return isSquareFree;
}
console.log(isSquareFreeNumber());

// 7. Number Base Conversion 

function binaryToDecimal(binNumber){
    let decimal = 0
    // debugger
    for(let i = binNumber.length - 1, j =0; i >= 0; i--, j++){
        decimal = decimal + binNumber[i] * 2**j;
    }
    return decimal;
}

console.log(binaryToDecimal('101101'))

// 8. Swap Variable without using third variable
let a = 5, b = 6;
a = b - a;
b = b - a;
a = b + a;

console.log("a = ", a , " b = ", b);