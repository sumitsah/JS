let rows = 5;
let star = '*';
for (let i = 1; i <= rows; i++) {
    console.log(star.repeat(i))
}

console.log("===== reverse star pattern ")
for (let i = rows; i >= 1 ; i--) {
    console.log(star.repeat(i))
}

console.log("===== reverse star pattern ")
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows; j++) {
        console.log(star.repeat(i))
    }
}