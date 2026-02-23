let mainStaring = 'Hellothere', subString = 'here';

function isSubstring(mainStaring, subString) {
    let j = 0;
    for (let i = 0; i < mainStaring.length; i++) {
        while (j < subString.length) {
            if (mainStaring[i] === subString[j]) {
                j++; i++;
                if (j === subString.length - 1)
                    return true
            } else {
                break;
            }
        }
    }
    return false;
}

console.log(isSubstring(mainStaring, subString));

function indexOfSub(mainStaring, subString) {
    let j = 0, index;
    for (let i = 0; i < mainStaring.length; i++) {
        while (j < subString.length) {
            if (mainStaring[i] === subString[j]) {
                if(j===0){
                    index = i;
                }
                j++; i++;
                if (j === subString.length - 1)
                    return index;
            } else {
                break;
            }
        }
    }
    return -1;
}

console.log(indexOfSub(mainStaring, subString));