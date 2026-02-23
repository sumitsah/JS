
// Factor 
let n = 100;
let factorArray = [], factorArray1 = [];

for(let i=1; i<=n; i++){
    if(n%i === 0){
        factorArray.push(i)
    }
} 

console.log(factorArray);

function getAllFactor(n){
    let factorArray1 = [];
    for(let i=1; i<=n/2; i++){
        if(n%i === 0){
            factorArray1.push(i)
        }
    }
    factorArray1.push(n)
    return factorArray1;
} 

console.log(getAllFactor(25));

// Print All Multiples of a Number up to N
let num1 = 4, limit = 40;
function getAllMultiple(num1, limit){
    let multipleArray = [];
    for(let i = num1; i <= limit; i+=num1){
        multipleArray.push(i);
    }
    return multipleArray;
}
console.log(getAllMultiple(num1, limit));
let firstNumberFactors = getAllFactor(12);
let secondNumberFactors = getAllFactor(18);
console.log(firstNumberFactors);
console.log(secondNumberFactors);

function getHCF(){
    for(let i=firstNumberFactors.length -1; i>=1; i-- ){
        for(let j= secondNumberFactors.length - 1 ; j>=1 ;  j--){
            if (firstNumberFactors[i] === secondNumberFactors[j]){
                return firstNumberFactors[i];
            }
        }
    }
}

function getOptimizedHCF(){
    for(let i=firstNumberFactors.length -1; i>=1; i-- ){
        if(18 % firstNumberFactors[i] === 0){
            return firstNumberFactors[i];
        }
    }
}

console.log("HCF for 12 and 18 is ", getHCF())
console.log("HCF for 12 and 18 is ", getOptimizedHCF())
console.log("HCF for 12 and 18 is ", moreOptimizedHCF(12, 16))


function moreOptimizedHCF(a,b){
    let divisor, divident, remainder = 1;
    if( a < b){
        divisor = a;
        divident = b;
    }else{
        divisor = b;
        divident = a;
    }

    while(remainder != 0){
        remainder = divident % divisor
        if(remainder){
            divident = divisor;
            divisor = remainder;
        }
    }
    return divisor;
}

// Find the Greatest Factor of a number (Other than Itself)

// CHeck if a number is a Perfect Number 
// If sum of all proper divisor = number -> Perfect Number
function isPerfectNumber(n){
    let factors = getAllFactor(n);
    factors.pop();
    if(factors.reduce((accumulator, currentValue) => accumulator + currentValue, 0) === n)
        return true
    return false;
}

console.log(isPerfectNumber(28) ? 'Perfect Number' : 'Not a Perfect Number')
console.log(isPerfectNumber(56) ? 'Perfect Number' : 'Not a Perfect Number')

// Prime Number - A number which is only divisible by 1 and itself
