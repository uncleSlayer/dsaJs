const arr = [3, 2, 1]
const target = 6

function printSub(index, list, sum) {

    if (index >= arr.length) {

        if (sum === target) {
            console.log(list);
        }

        return
    
    } else {

        sum += arr[index]

        list.push(arr[index])
        printSub(index + 1, list, sum)

        sum -= arr[index]
        list.pop()
        printSub(index + 1, list, sum)

    }
    
}

printSub(0, [], 0)