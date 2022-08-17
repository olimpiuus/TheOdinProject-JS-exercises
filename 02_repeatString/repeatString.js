const repeatString = function(str, times) {
    let repetedStriing = ''
    for (let i = 0; i < times; ++i) {
        repetedStriing = repetedStriing + str
    }
    if (times < 0) { return 'ERROR' }
    // if (times === 0) { return repetedStriing = '' }
    return repetedStriing

};

// Do not edit below this line
module.exports = repeatString;