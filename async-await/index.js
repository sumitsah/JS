const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise resolved value 1")
    }, 20000);
})
const p2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise resolved value 2")
    }, 10000);
})

async function handlePromise() {
    console.log("Hello World");

    const val1 = await p1;
    console.log("Namaste Javascript 1")
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste Javascript 2")
    console.log(val2)
}

handlePromise();

// This Keyword

//1. this in global space
this // GLobal Object , window global

//2.  this inside a function
function x(){
    // value depends on strict and non strict mode
    console.log(this)
}

//3.  this in strict mode - (this substitution)
// If the value of this keyword is undefind or null 'this' will be replaced with globalObject only in non strict mode

//4.  this keyword value depends on how the function is called.

//5. this inside a object's method
const obj = {
    a: 10,
    y: function(){
        console.log(this)  // The value of 'this' will be 'obj'
    }
}

obj.y(); 

// 6. call, bind and apply methods (Sharing methods)


const student = {
    name: 'Sumit',
    printName : function(){
        console.log(this.name);
    }
}

const student2 = {
    name: 'Sahu'
}

student.printName()
student.printName.call(student2);

// this inside arrow function 

//7. Arrow function dows not have this binding associated with it. it retains this value of the enclosing lexical context

const obj1 = {
    a: 10,
    y: () => {
        console.log(this)  // The value of 'this' will be 'obj'
    }
}

obj1.y(); 

//8. this inside nested arrow function

const obj2 = {
    a: 10,
    x: function(){
        const y = () => {
            console.log(this)  // The value of 'this' will be 'obj'
        };
        y();
    }
}

obj2.x();

// this inside Dom elements => reference to HTML element

// this inside class, constructor and 