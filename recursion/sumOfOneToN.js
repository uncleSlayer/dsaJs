const n = 5

function printSum(i, sum) {

    if (i > n) {
        console.log(sum);
        return
    }

    printSum(i + 1, sum + i)

}

printSum(1, 0)