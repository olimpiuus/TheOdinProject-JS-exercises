const fibonacci = function(a) {
    if (a < 0) { return 'OOPS' }
    let fibo = [1, 1]
    for (let i = 0; i < a; i++) {
        fibo[i + 2] = fibo[i + 1] + fibo[i]
    }

    console.log(fibo);
    return fibo[a - 1]
};

// Do not edit below this line
module.exports = fibonacci;