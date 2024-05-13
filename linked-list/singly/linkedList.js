class Node {

	constructor (data) {
		
		this.data = data
		this.next = null

	}	

}

const nodeOne = new Node(2)
const nodeTwo = new Node(44)
const nodeThree = new Node('Hello from node three')

nodeOne.next = nodeTwo
nodeTwo.next = nodeThree

console.log(nodeOne, nodeTwo, nodeThree)
