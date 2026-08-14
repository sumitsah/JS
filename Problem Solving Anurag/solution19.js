// 1️⃣ Print All Values in a Nested Object
function printNestedObjestValues(obj, tempObj = Object.keys(obj), i = 0) {

    if (i === tempObj.length) return;
    if ((typeof obj[tempObj[i]] === 'string') || (typeof obj[tempObj[i]] === 'number')) {
        console.log(obj[tempObj[i]]);
    }
    if ((typeof obj[tempObj[i]] === 'object' && obj[tempObj[i]] !== null)) {
        let obj1 = obj[tempObj[i]];
        Object.keys(obj1).forEach(key => {
            if (typeof obj1[key] === 'number' || typeof obj1[key] === 'string')
                console.log(obj1[key]);
            if (typeof obj1[key] === 'object' && obj1[key] !== null) {
                printNestedObjestValues(obj1[key], Object.keys(obj1[key]))
            }
        });
    }
    return printNestedObjestValues(obj, tempObj, i + 1)
}

printNestedObjestValues({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 'Hi'
      },
      i:{
        j: 'Bye'
      }
    }
  }
})

function printObjectValues(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printObjectValues(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}

// 2️⃣ Count Total Number of Keys in a Nested Object
function countObjectKeys(obj, count = 0) {
    const keys = Object.keys(obj);
    count += keys.length;
    for (const key of keys) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            return countObjectKeys(obj[key], count);
        }
    }
    return count;

}
console.log(countObjectKeys({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
      g: 5
    }
  }
}))

function countKeys(obj) {
  let count = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    count++;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += countKeys(obj[key]);
    }
  }

  return count;
}

// 3️⃣ Find the Sum of All Numeric Values in a Nested Object

function sumOfNumeric(obj) {
  let count = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += sumOfNumeric(obj[key]);
    }
    if(typeof obj[key] === 'number') count+=obj[key];
  }

  return count;
}

console.log(sumOfNumeric({
  x: 10,
  y: {
    z: 5,
    w: {
      k: 16
    }
  }
}))

console.log(sumOfNumeric({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 'Hi'
      },
      i:{
        j: 'Bye'
      }
    }
  }
}))

// 4️⃣ Print All Keys in a Nested Object
function printObjectKeys(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(key)
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printObjectKeys(obj[key]);
    } 
  }
}

console.log(printObjectKeys({
  a: {
    b: {
      c: 1
    }
  }
}))

console.log(printObjectKeys({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 'Hi'
      },
      i:{
        j: 'Bye'
      }
    }
  }
}))

// Homework
// 1️⃣ Convert All String Values to Uppercase in a Nested Object
function convertToUpperCase(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      {obj, convertToUpperCase(obj[key]) }
    }else if(typeof obj[key] === "string"){
        obj[key] = obj[key].toUpperCase();
    }
  }
  return obj
}

console.log(convertToUpperCase({
  name: "john",
  details: {
    city: "mumbai",
    role: "dev"
  }
}))

console.log(convertToUpperCase({
  name: "john",
  details: {
    city: "mumbai",
    role: "dev",
    address: {
        lane1 : 'hjhghjh',
        lane2 : 'gfhjdjfjg'
    }
  }
}))

// 2️⃣ Count How Many Times a Key Appears in a Nested Object

function numberOfKeys(obj, searchKey) {
  const keys = Object.keys(obj);
  let count = 0;
  for (const key of keys) {
    if(key === searchKey) count++;
    if (typeof obj[key] === "object" && obj[key] !== null) {
        count += numberOfKeys(obj[key], searchKey)
    }
  }
  return count;
}

console.log(numberOfKeys({
  a: 1,
  b: {
    a: 2,
    c: {
      a: 3,
      e: {
        a: 4
      }
    }
  }
}, 'a'))

// 3️⃣ Find the Depth of a Nested Object

function depthOfNestedObj(obj) {
  const keys = Object.keys(obj);
  let count = 0;
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
        count++;
        count += depthOfNestedObj(obj[key])
    }else{
        count++;
    }
  }
  return count;
}

console.log(depthOfNestedObj({
  a: {
    b: {
      c: {
        d: {
            e:3
        }
      }
    }
  }
}))

// 4️⃣ Check If a Value Exists in a Nested Object
function isValueExist(obj, searchKey) {
  const keys = Object.keys(obj);
 
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
        return isValueExist(obj[key], searchKey) ? true : false;
    }else if(typeof obj[key] === "string" && obj[key] === searchKey){
        return true
    }
  }
}

console.log(isValueExist({
  name: "A",
  info: {
    age: 25,
    address: {
      city: "Delhi"
    }
  }
}, 'Delhi1'))

// 5️⃣ Replace a Value in a Nested Object Using Recursion

function replaceSpecifiedValues(obj, replcedStr, replacinStr) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      {obj, replaceSpecifiedValues(obj[key], replcedStr, replacinStr) }
    }else if(typeof obj[key] === "string" && obj[key] === replcedStr){
        obj[key] = replacinStr;
    }
  }
  return obj
}

console.log(replaceSpecifiedValues({
  name: "A",
  info: {
    age: 25,
    address: {
      city: "Delhi"
    }
  }
},'Delhi','Bangalore'))

// 6️⃣ Count Total Number of Objects Inside a Nested Structure
function countObjects(obj) {
  let count = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count ++;
       count +=countObjects(obj[key])
    }
  }
  return count;
}

console.log(countObjects({
  a: {},
  b: {
    c: {},
    d: {
      e: {},
      f: 5
    }
  }
}))

// 7️⃣ Find the Path to a Given Key in a Nested Object
function findPathToGivenKey(obj, givenKey) {
  const keys = Object.keys(obj);
  let path = '';
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if(deepKeyExists(obj[key], givenKey)) {
        console.log(obj[key], ' ====> ', key)
        path += `${key}.`
      }
      path += findPathToGivenKey(obj[key], givenKey)
    } 
    if(key === givenKey) return path += `${key}`
  }
  return path;
}

console.log(findPathToGivenKey({
  a: {},
  b: {
    c: {},
    d: {
      e: {},
      f: 5
    },
    g:{
      h: 10
    }
  }
},'h'))

// console.log(findPathToGivenKey({
//   a: {},
//   b: {
//     c: {},
//     d: {
//       e: {},
//       f: 5
//     }
//   }
// }, 'e'))


function deepKeyExists(obj, targetKey) {
  if (obj && typeof obj === "object" && obj !== null) {
    if (Object.prototype.hasOwnProperty.call(obj, targetKey)) {
      return true;
    }
    return Object.values(obj).some(value =>
      deepKeyExists(value, targetKey)
    );
  }
  return false;
}

console.log(deepKeyExists({
  a: {},
  b: {
    c: {},
    d: {
      e: {},
      f: 5
    },
    g:{
      h: 10
    }
  }
}, 'h'))

console.log('==============')

// 8️⃣ Find the Maximum Numeric Value in a Nested Object
function maxEl(obj, arr= []) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) maxEl(obj[key], arr);
    if(typeof obj[key] === 'number') arr.push(obj[key])
  }
  return Math.max(...arr);
}

console.log(maxEl({
  a: 4,
  b: {
    c: 9,
    d: {
      e: 120
    },
    f:{
      g:30
    }
  }
}))