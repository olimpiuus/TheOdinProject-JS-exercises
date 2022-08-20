const sumAll = function(number1, number2) {

    let minNumber = Math.min(number1, number2)
    const maxNumber = Math.max(number1, number2)
    if (minNumber < 0 || isNaN(minNumber) || !Number.isInteger(number2) || !Number.isInteger(number1)) { return 'ERROR'; }
    console.log(minNumber, maxNumber);
    let sumIntegersBetween = 0
    while (minNumber <= maxNumber) {
        sumIntegersBetween += minNumber
        minNumber++
        // console.log(sumIntegersBetween, minNumber);
    }
    return sumIntegersBetween
};



// Do not edit below this line
module.exports = sumAll;