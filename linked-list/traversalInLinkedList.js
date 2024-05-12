const arr = [1, 2, 3, 4, 5, 6]

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

start = head

 while ( start && start.data ) {

	console.log(start.data)
	start = start.next

}
