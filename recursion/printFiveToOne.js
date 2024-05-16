function printFto(count) {
    
    if (count === 0) return
    
    console.log(count)
    
    printFto(count - 1)

}

printFto(5)