const arr = [2, 2 , 3 , 3 , 3 , 3 , 4]
const target = 2
let ans = -1 

let start = 0
let end = arr.length - 1

for ( let i = 0; i < arr.length - 1; i++ ) {
	
	const mid = ( start + end ) / 2

	if ( arr[mid] === target ) {

		ans = 1
		let left = 1
		let right = 1

		while ( arr[mid - left] === target ) {
			ans++	
			left += 1
		}

		while ( arr[mid + right] === target ) {
	
			ans++
			right += 1

		}

	} else if ( target > arr[mid] ) {
	
		start = mid + 1

	} else if ( target < arr[mid] ) {

		end = mid - 1

	}

}

console.log(ans)
