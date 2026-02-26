// ES6 features 
// 1. Arrow function
// 2. Default Params
// 3. Spread Operator
const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8, 9]
const myName = 'Sumit';
const joinedArray = [...nums1, ...nums2, ...myName]
console.log(joinedArray)

const user = {
    name : 'Sumit',
    age: 20
}

const updatedUser = { ...user }
console.log(updatedUser)

// Need to read Deep/Shallow copy, Arguments in functions 

// 4. Rest Parameter

function add(...args){
    console.log(arguments)
    console.log(Array.from(arguments))
    console.log([...arguments])
    console.log(args)
    const sum = args.reduce((acc, curr) => acc+=curr
    , 0)
    return sum;
}
// 5. Destructuring 
const user1 = {
 name: 'Sumit',
 age:20,
 address: {
    city: 'Bangalore',
    pinCode: '560037'
 },
 getfullName : function(){
    return user1.name + ' '+ user1.age;
 },
//  getfullName : 'sumit'
} 

const {name, age } = user1;
console.log(name, age)

// Multilevel Destructuring
const {address: {city}} = user1;
console.log(city)

const colors = ['red', 'yellow', 'green', 'pink', 'black']
const [c1,c2] = colors;
console.log(c1,c2)

const { 3: c4 } = colors;
console.log(c4)

// object destructuring
function userIntro({name, age}){
    console.log(name, age)
}

userIntro(user1)

//6. Optional Chaining 
user1?.getfullName()

// Import and export in ES6 module

// export { usersData }; named export 
// import { usersData } from "./usersData.js"

// export default usersData         default export
// import usersData from "./usersData.js"
// import users from "./usersData.js"

// Copy objects and array
const user2 = {
    username : 'Sumit',
    surname: 'sahu'
}

// const user3 = {};

// Older way of copying the object
// Object.assign(user3, user2)

// copying object using spread operator
const user3 = {...user2}  // Shallow copy (copies only one level)

// Array
const fruites = ['Mango', 'Apple', 'Graps']
// 1.
// const myFruites = [];

// Object.assign(myFruites, fruites)

// myFruites.push('orange')

// 2.
// const myFruites = [].concat(fruites);

// 3. 
const myFruites = fruites.slice() // returns new array and splice return same array

const deepCopy = JSON.parse(JSON.stringify(user2))
