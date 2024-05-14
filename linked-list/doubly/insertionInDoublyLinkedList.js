const arr = [1, 2, 3, 4, 5, 6]

const target = 2 // (Index and not value of the node)

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
count = 0

while (moverTwo && moverTwo.data) {

    const newNode = new NodeList('The new super duper beautiful node')

    if (count === target - 1) {
        newNode.next = moverTwo.next
        newNode.prev = moverTwo
        moverTwo.next = newNode
    }

    if (count === target) {
        moverTwo.prev = newNode
    }

    console.log(moverTwo);

    moverTwo = moverTwo.next

    count++
}