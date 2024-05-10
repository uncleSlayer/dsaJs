const arr = [1, 2, 4, 7]
const target = 6

let start = 0
let end = arr.length - 1
let ans = null

for ( let i = 0; i <= arr.length - 1; i++ ) {

	const mid = Math.floor((start + end) / 2)

	if (arr[mid] === target) {
		
		ans = mid
		console.log(`Target value found at index ${mid}`)	
		break;

	} else if ( target > arr[mid] ) {
	
		ans = mid	
		start = mid + 1

	} else if ( target < arr[mid] ) {

		end = mid - 1

	}

}

console.log('ans is : ', ans)
