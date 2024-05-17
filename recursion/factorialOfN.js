const n = 5

function calculateFactorial(i, mul) {

    if (i === 1) return mul

    return calculateFactorial(i - 1, mul * i)
    
}

console.log(calculateFactorial(n, 1));