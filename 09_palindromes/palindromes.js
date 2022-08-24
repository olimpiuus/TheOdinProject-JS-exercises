const palindromes = function(str) {
    let newStr = ''
    let copyStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    let newArrStr = [...copyStr]
    for (let i = newArrStr.length - 1; i >= 0; i--) {
        newStr += newArrStr[i]
    }
    console.log(newStr, str.toLowerCase());
    return newStr === copyStr
};

// Do not edit below this line
module.exports = palindromes;