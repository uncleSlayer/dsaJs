const arr = [1, 2, 3, 4, 5, 6]

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
    newNode.prev = mover
    mover.next = newNode

    mover = mover.next

}

let moverTwo = head

let prev = null

while (moverTwo && moverTwo.data) {

    prev = moverTwo.next
    
    moverTwo.next = moverTwo.prev
    moverTwo.prev = prev
    console.log(moverTwo);
    moverTwo = moverTwo.prev
 
}