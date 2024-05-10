const arr = [1, 3, 5, 7, 9, 12, 33]

let start = 0
let end = arr.length - 1
const target = 33

let index = null

while ( start <= end ) {
	
	const mid = (start + end) / 2

	if ( arr[mid] === target ) {
		index = mid
		break;
	} else if ( arr[mid] < target ) {

		start = mid + 1

	} else if ( arr[mid] > target ) {
		end = mid - 1
	}

}

console.log(index)
