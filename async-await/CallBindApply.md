# call(), bind(), apply() 
let name1 = {
    firstName : 'Sumit',
    lastName: 'Sahu',
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

name1.printFullName();

let name2 = {
    firstName : 'Mahendra',
    lastName: 'Dhoni',
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

name2.printFullName();

call Method
we can print the fullname in both the objects but here we are creating printFullName() function each time
when creating an object literal. Which is obviously is not a good practice to write repeatitive code. function can be defind in one of the object and can be borrowed to other object by means of call method.
We can use call method to share the function with object. Which is known as function borrowing.
We need to tell call method to point to different object by passing in the first argument, in our case name2

function borrowing 
name1.printFullName(name2);

But we do not write function inside object which we want to share and keep the function outside the object literal.

let name1 = {
    firstName : 'Sumit',
    lastName: 'Sahu',
}

let printFullName = function(){
     console.log(this.firstName + " " + this.lastName);
}

printFullName(name1);

Now we can simply call printFullName(name1). What if function had an argument.

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
}

printFullName.call(name1, "Jabalpur", "MP");

So first argument of call method is this context and later arguments are arguments of printFullName function.

apply Method
The only difference between call and apply method is that the way we pass the arguments.
first argument is refrence to 'this' variable and second is list of arguments.

printFullName.call(name1, ["Jabalpur", "MP"]);

bind Method
bind method looks excatly the same as the call method, but the only difference is instead of directly calling. So bind will create a copy of printFullName and bind printFullName to name1 object and will return a function. It does not call the function rather than bind returns a function, which can be called later attaching the reference of name1.

let printMyName = printFullName.bind(name1, "Jabalpur", "MP");

Application of bind
Currying using bind Method

let multiply = function(x, y){
 console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2);

Above, we are calling multiply using bind method. The expression will be replaced as follows
Hypothetically

let multiplyByTwo = function(y){
    let x =2;
    console.log(x*y)
}

Now let's call multiplyByTwo:

multiplyByTwo(5)  // output : 10

This is called function currying. If we pass third argument to bind 

let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5)  // output : 6

Here 3 will act as y and in multiplyByTwo(5) 5 will be ignored.

This is one way of acheiving function currying. Other way to acheive function currying is By 'Clousre'.

let multiply = function(x){
 return function(y){
    console.log(x * y)
 }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3) // output : 6
