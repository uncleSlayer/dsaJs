function printFtO(count) {
    if (count === 0) return
    
    printFtO(count - 1)

    console.log(count);

}

printFtO(5)