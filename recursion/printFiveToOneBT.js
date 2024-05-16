function printFTO(count) {
    
    if ( count === 6) return
    
    printFTO(count + 1)
    
    console.log(count);

}

printFTO(1)