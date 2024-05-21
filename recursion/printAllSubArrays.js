const ar = [1, 2, 3, 4, 5]

function printAllSubArray(index, arr) {

    if (index === ar.length) {

        console.log(arr);
        return

    } else {
        console.log(arr);
        printAllSubArray(index + 1, arr.concat(ar[index]))
        // printAllSubArray(index + 1, arr.slice(0, -1))
    }

}

printAllSubArray(0, [])