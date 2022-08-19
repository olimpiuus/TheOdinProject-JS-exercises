const reverseString = function(str) {
    let newStr = ''
    let arrayStr = [...str]
        // arrayStr.forEach((word) => { newStr.push(word) })
    for (let i = arrayStr.length - 1; i >= 0; i--) {
        newStr += arrayStr[i]
    }
    return newStr
};
// Do not edit below this line
module.exports = reverseString;