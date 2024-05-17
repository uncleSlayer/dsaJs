const arr = [1, 2, 3, 4, 2]
let l = 0
let r = arr.length - 1

function reverse(l, r) {

    if (l > r) return

    const temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp

    reverse(l + 1, r - 1)

}

reverse(l, r)

console.log(arr);