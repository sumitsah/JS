// console.log('====== PFind the maximum of three numbers')
// let a,b,c;
//  a = 101; b = 101; c =200;
// let max = a<b ? b<c ? c : b : (a<c) ? c : a;
// console.log(max)

// console.log("===CHeck if a number is positive, negative, or zero")
// let z = -2;
// let ans = z === 0 ? 'Zero' : z < 0 ? 'Negative' : "positive";
// console.log(ans);

console.log("===Calculate a electricity bill")

// switch(unit){
//     case unit >= 0 && unit <=100:
//         bill = 
// }
// let priceSlabs = [
//     {limit: 100, rate: 5},
//     {limit: 200, rate: 7}, 
//     {limit: 300, rate: 10},
//     {limit: Infinity, rate: 12}
// ]

// const calBill = (units) => {
//     for (const slab of priceSlabs) {
//         if(units <= slab.limit){
//             return units * slab.rate;
//         }
//     }
// }

let units = 450;
let lastTwoDigits = 1;
let rate = '';
let bill = 0;

// debugger
while(units != 0){
    if(units >= 0 && units <=100){
        if(rate === 'two' || rate === 'one' ){
            bill = bill + 100 * 5;
            units = units - 100;
        }else{
            lastTwoDigits = String(units).slice(-2);
            bill = bill + lastTwoDigits * 5;
            units = units - lastTwoDigits;
        }

    }else if(units >= 100 && units <=200){
        if(rate === 'two'){
            bill = bill + 100 * 7;
            units = units - 100;
        }else{
            lastTwoDigits = String(units).slice(-2);
            bill = bill + lastTwoDigits * 7;
            units = units - lastTwoDigits;
        }
        rate = 'one'
        
    }else if(units >= 200 && units <=300){
        // let temp = units
        // for(let i=1; i<2; i++){
        //     lastTwoDigits =  temp % 10
        //     temp = temp / 10
        // }
         if(rate === 'three'){
            bill = bill + 100 * 10;
            units = units - 100;
        }else{
            lastTwoDigits = String(units).slice(-2);
            bill = bill + lastTwoDigits * 10;
            units = units - lastTwoDigits;
        }
        rate = 'two'
    }
    else{
        if(units > 300){
           let temp = units - 300
           bill = bill + temp * 12;
           units = units - temp;
        }else{

            lastTwoDigits = String(units).slice(-2)
            bill = bill + lastTwoDigits * 12;
            units = units - lastTwoDigits;
        }
        rate = 'three';
    }
}

console.log(bill)

console.log("===Check if character is vowel or consonent");
let ch = 's'
if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
    console.log('vowel')
}else{
    console.log('Consonent')
}


console.log("===Check if year is leap year");
let year = 2026;
if((year%4 ===0 && year % 100 != 0) || (year%400 === 0)){
    console.log('leap year ', year)
}else{
    console.log('not a leap year ', year)
}

