function pasc(row, col) {
    if (col === 0 || col === row) {
        return 1
    } else {
        return pasc(row - 1, col - 1) + pasc(row - 1, col)
    }
}

console.log(pasc(4, 2));