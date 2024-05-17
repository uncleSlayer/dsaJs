const check = 'hobb7oh'

function checkIfPalindrome(l, r) {

    if (l >= r) return true

    if (check[l] === check[r]) {
        return checkIfPalindrome(l + 1, r - 1)
    } else {
        return false
    }

}

console.log(checkIfPalindrome(0, check.length - 1))