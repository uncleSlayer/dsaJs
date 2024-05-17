const n = 5

function printSum(i, sum) {

    if (i < 1) {
        console.log(sum);
        return sum
    }

    printSum(i - 1, sum + i)
    
}

printSum(5, 0)