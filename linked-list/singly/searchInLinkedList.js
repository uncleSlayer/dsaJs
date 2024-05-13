const arr = [1, 2, 3, 4, 5, 6]
const target = 6

class NodeList {
	
	constructor(data) {

		this.data = data
		this.next = null

	}

}

const head = new NodeList(arr[0])
let mover = head

for ( let i = 1; i <= arr.length - 1; i++ ) {
	
	const temp = new NodeList(arr[i])
	mover.next = temp
	mover = mover.next

}

let start = head 

while ( !!start.data ) {
	
	if (start.data === target) {
		console.log(`Data found. ${start.data}`)
		break;
	}

	start = start.next

}
