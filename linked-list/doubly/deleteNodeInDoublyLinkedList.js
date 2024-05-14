const arr = [1, 2, 3, 4, 5, 6]
const target = 2 // Index and not node value
class NodeList {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

const head = new NodeList(arr[0])
let mover = head

for (let i = 1; i <= arr.length - 1; i++) {

    const newNode = new NodeList(arr[i])
    mover.next = newNode
    newNode.prev = mover

    mover = mover.next

}

let moverTwo = head
let count = 0

while ( count <= arr.length && moverTwo && moverTwo.data) {

    if (count === target) {
        moverTwo.prev.next = moverTwo.next
        moverTwo.next.prev = moverTwo.prev
    }

    moverTwo = moverTwo.next
    count++

}

let moverThree = head

while (moverThree && moverThree.data) {
    console.log(moverThree);
    moverThree = moverThree.next
}