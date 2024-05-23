const arr = [1, 1, 4, 7, 1, 3]

function merge(arr, low, mid, high) {

    let left = low
    let right = mid + 1
    const result = []

    while (left <= mid && right <= high) {

        if (arr[left] <= arr[right]) {

            result.push(arr[left])
            left++

        } else if (arr[right] < arr[left]) {

            result.push(arr[right])
            right++

        }

    }

    while (left <= mid) {

        result.push(arr[left])
        left++

    }

    while (right <= high) {

        result.push(arr[right])
        right++

    }

    return result

}

function mergeSort(arr, low, high) {

    if (low >= high) {
        return
    } else {

        const mid = Math.floor((low + high) / 2)

        mergeSort(arr, low, mid)
        mergeSort(arr, mid + 1, high)

        const tempArr = merge(arr, low, mid, high)

        for (let i = 0; i <= tempArr.length - 1; i++) {
            arr[i + low] = tempArr[i]
        }

    }

}


mergeSort(arr, 0, arr.length - 1)

console.log(arr);