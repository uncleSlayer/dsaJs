const arr = [
	[ 0, 1, 1 ],
	[ 0, 0, 1 ],
	[ 1, 1, 1 ]
]

const target = 1

let index = null
let prevCount = 0

for ( let i = 0; i <= arr.length - 1; i++ ) {
	
	let start = 0
	let end = arr[i].length - 1
	let count = 0	

	while ( start <= end ) {	
			
		const mid = Math.floor((start + end) / 2)
		
		let left = mid
		let right = mid
		
		if ( arr[i][mid] === target ) {
				
			count++
			left--
			right++
			
			while ( arr[i][left] === target ) {
				count++
				left--
			}
			
			while ( arr[i][right] === target ) {
				count++
				right++
			}

			break;

		} else if ( target > arr[i][mid] ) {

			start = mid + 1
		
		} else if ( target < arr[i][mid] ) {
			
			end = mid - 1
		
		}

	}

	console.log('the count haha is: ', count)

	if ( count > prevCount ) {
	
		prevCount = count
		index = i
	
	}

}

console.log(index)
