const arr = [3,4,13,13,13,20,40]

const target = 13

let start = 0
let end = arr.length - 1
let ans = -1

for ( let i = 0; i <= arr.length - 1; i++ ) {
	
	const mid = Math.floor(( start + end )/2)
	
	if ( arr[mid] === target ) {
		
		ans = mid
		start = mid + 1
	
	} else if ( target > arr[mid] ) {
	
		start = mid + 1

	} else if ( target < arr[mid] ) {
	
		end = mid - 1

	}

}

console.log(ans)
