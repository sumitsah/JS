// Split number into Digits
let numm = 12345;
let numArray = [];

while(numm != 0){
 let digit =  numm % 10;
 numArray.push(digit);
 numm = Math.floor(numm / 10);
}
console.log(numArray.reverse());


// Remove the decimal point mathematically 
let floatNum = 12.34;
let coun = decimalPlaces(floatNum);
// console.log(count)
// while(count != 0){
//  floatNum *= 10
//  count--;
// }

console.log(coun.num)


function decimalPlaces(num) {
  let count = 0;
  while (!Number.isInteger(num)) {
    num *= 10;
    count++;
    // Safety to avoid infinite loop because of floating point precision
    if (count > 20) break;
  }
  return {count, num};
}

// Separate Whole and Fraction parts of a number
// let number = 56.7105;
let number = 12.345;
console.log(number)
let {count , num} = decimalPlaces(number);
let digi = num % (10**count);

digi = digi / (10**count);
    
console.log('Fraction ', digi)
console.log('Fraction Count ', count)

// Count whole and fraction
let whole = number - digi;
console.log("Whole ",whole)
let wholeCount = 0;

while(whole != 0){
    let rem = whole % 10;
    whole = (whole - rem) / 10;
    wholeCount++;
}

console.log("Whole Count ", wholeCount);

// 5 Generate a Decimal Number from whole and Fractional Digits
console.log(' == Generate a Decimal Number from whole and Fractional Digits ==')
const Whole = [1,2];
const Fraction = [3,4, 5];

let actualWhole = 0;

for(let i = 0; i < Whole.length ; i++ ){
    actualWhole = actualWhole + (Whole[Whole.length - i - 1] * 10**i);
}

let tempWhole = actualWhole
let base = (actualWhole * 10**(Whole.length - 1))

for(let i = 0; i < Fraction.length ; i++ ){
    tempWhole = (tempWhole * 10) + Fraction[i];
}

console.log(actualWhole, tempWhole);

let actualNumber = tempWhole / 10**Fraction.length;
console.log(actualNumber);