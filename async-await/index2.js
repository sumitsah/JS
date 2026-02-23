let name1 = {
    firstName : 'Sumit',
    lastName: 'Sahu'
}

let printFullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName+ " " + hometown + " " + state);
}

printFullName.call(name1, "Jabalpur", "MP");
// printFullName( "Jabalpur", "MP");

let name2 = {
    firstName : 'MS',
    lastName: 'Dhoni'
}

printFullName.call(name2, "Ranchi", "CG");
printFullName.apply(name2, ["Ranchi", "CG"]);

// bind keep a copy and can be invoked later.
let printMyName = printFullName.bind(name2, "Ranchi", "CG");
console.log(printMyName)
printMyName();
