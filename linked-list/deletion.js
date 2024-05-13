const arr = [1, 2, 3, 4, 5, 6]
const target = 2

class NodeList {

    constructor(data) {

        this.data = data
        this.next = null
    
    }

}

const head = new NodeList(arr[0])
let mover = head

for (let i = 1; i <= arr.length - 1; i++) {

    const temp = new NodeList(arr[i])
    mover.next = temp
    mover = mover.next

}

let moverTwo = head
let temp = null
let headTwo = head

while ( moverTwo && moverTwo.data ) {

    if ( moverTwo.data === target - 1 ) {
        temp = moverTwo
    }

    if (moverTwo.data === target + 1) {
        temp.next = moverTwo
    }

    moverTwo = moverTwo.next

}

console.log(headTwo);