const arr = [1, 2, 2, 3, 3, 5]
const target = 7
let start = 0
let end = arr.length - 1
let ans = null

while ( start <= end ) {
	
	const mid = Math.floor((start + end) / 2) 
	
	if ( arr[mid] === target ) {
		ans = mid
		console.log('found answer')
		break;

	} else if ( target < arr[mid] ) {
		ans = mid
		end = mid - 1

	} else if ( target > arr[mid] ) {
		start = mid + 1	
	}

}


console.log(ans)

