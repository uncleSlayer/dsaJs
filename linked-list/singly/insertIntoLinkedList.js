class NodeList {

	constructor(data) {

		this.data = data
		this.next = null
	
	}	

}

const arr = [1, 2, 3, 4, 5, 6]
const target = 2

const head = new NodeList(arr[0])
let mover = head

for ( let i = 1; i < arr.length; i++ ) {

	const temp = new NodeList(arr[i])
	mover.next = temp
	mover = mover.next	

}

let mover2 = head
let previousNode = null

while ( mover2 && mover2.data ) {

	console.log(mover2)

	if ( mover2.data === target ) {
	
		const newNode = new NodeList(`I am a new node just after ${target}`)
		const temp = mover2.next
		mover2.next = newNode
		newNode.next = temp
	}	

	mover2 = mover2.next

}
