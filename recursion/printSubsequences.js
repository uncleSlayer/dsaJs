const arr = [3, 1, 2]

function printSub(index, list) {

    if (index >= arr.length) {
        console.log(list);
        return;
    } else {
        list.push(arr[index])
        printSub(index + 1, list)
        list.pop()

        printSub(index + 1, list)

    }

}

printSub(0, [])