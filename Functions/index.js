index.js
a();
b();

// Function Statement or Function Declaration
function a() {
  console.log("a called");
}

// Function Expression
var b = function () {
  console.log("b called");
}

// Function Declaration

// Anonymous Function
// function () {
//   console.log("b called");
// } but passed as value

// Named Function Expression
var b = function xyz() {
  console.log("b called");
}

// Difference between Parameters & Arguments ?
// argument At the time calling
// Parameters 

// First Class Functions
// Function are First class citizes to be used as (passed as argument, function return from another function)
var c = function (param1) {
  console.log("b called");
}

c(function(){

})

// passing a function in another function known as first class function

// Arrow Functions

// ===========================================================================================

// What is the callback function in JS