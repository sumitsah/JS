// n = prompt('Please enter a number ');
// console.log(n)
// for(i = 1; i<= n; i++){
//     console.log(i)
// }

const number = document.getElementById('number');
const container = document.getElementById('print');
const btn = document.getElementById('btn');
console.log(number)

// btn.addEventListener('click', ()=>{
//   for(let i = 1; i<= number.value; i++){
//         const child = document.createElement('div');
//         child.textContent =  i;
//         container.appendChild(child);
//     }
// })

// n = prompt('Please enter a number ');
// console.log(n)
// for(i = 1; i<= n; i++){
//     // n - i
//     let temp = (i === 1) ? 0 : i - 1;
//     console.log(n-temp)
// }

btn.addEventListener('click', () => {
    for (let i = 1; i <= number.value; i++) {
        const child = document.createElement('div');
        let temp = (i === 1) ? 0 : i - 1;
        child.textContent = number.value - temp;
        container.appendChild(child);
    }
})

// sum numbers
let n = 5;
let sumOfeven = 0;
for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i)
        sumOfeven = sumOfeven + i;
    }
}
console.log(sumOfeven)

// sum of first n natural numbers

let m = 5;
let sum = 0;

console.log((m * (m + 1)) / 2)
// for(let i = 1; i<=m; i++){
//     sum = sum + i
// }
// console.log(sum)

// product of n
let fact = 1
for (let i = 1; i <= m; i++) {
    fact = fact * i
}
console.log(fact)

//  6. sum of all even numbers up to n 

console.log(n * (n + 1))

// 7. Print squares of numbers

for (let i = 1; i <= n; i++) {
    console.log(i * i)
}
// HOME
//  print all numbers divisible by 3 & 5 up to N
console.log('======')
let k = 30;
for (let i = 1; i <= k; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(i)
    }
}

//  FInd the sum of all odd numbers up to N
let o = 40;
console.log('====== FInd the sum of all odd numbers up to N')
// console.log(o * (o + 1) + (2*o + 1))

let l, a , d;
// (( l - a) * d ) /a;
let term = (( l - a) * d ) /a;
let count = 0;
for (let i = 1; i <= o; i++) {
    if (i % 2 != 0) {
        count++;
    }
}
console.log(count**2)

//  Print the cubes of numbers from 1 to N
for (let i = 1; i <= o; i++) {
  console.log(count**3)
}
// Print only the numbers that are both even and perfect square

console.log('====== Print only the numbers that are both even and perfect square')
for (let i = 1; i <= o; i++) {
    if (i%2 === 0 && Number.isInteger(Math.sqrt(i)))
        console.log(i)
}