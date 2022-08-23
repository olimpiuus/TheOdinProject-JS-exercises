const add = function(a, b) {
    return a + b
};

const subtract = function(a, b) {
    return a - b
};

const sum = function(arr) {
    return arr.reduce((summ, num) => summ += num, 0)
        // argmts.reduce(((summ, a) => summ += a), 0)


};

const multiply = function(arr) {
    return arr.reduce((total, a) => total *= a, 1)

};

const power = function(a, b) {
    return a ** b
};

const factorial = function(a) {
    let faq = 1
    for (let i = a; i > 1; i--) {
        faq = faq * i

    }
    return faq
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};