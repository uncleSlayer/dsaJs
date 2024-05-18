function giveFibbonacciNumber(n) {

    if (n <= 1) {
        return n
    }

    else {
        return (giveFibbonacciNumber(n - 1) + giveFibbonacciNumber(n - 2))
    }

}

console.log(giveFibbonacciNumber(6));