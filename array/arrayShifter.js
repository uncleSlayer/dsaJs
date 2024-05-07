const arr = [1,2, 3, 4, 5]

const shiftArrayBy = 2 % arr.length

// const temp = []
// const ans = []

// for ( let i = 0; i < shiftArrayBy; i++ ) {
	
	// temp.push(arr[i])	

// }

// for ( let i = 0; i <= arr.length - (1 + shiftArrayBy); i++ ) {
	
// 	ans.push(arr[i + shiftArrayBy])

// }

// for ( let i = 0; i <= temp.length -1; i ++ ) {
	
//	ans.push(temp[i])	

// }

// console.log(ans)
//
// below is an more optimal solution, think why?

const reverse = (arr, start, end) => {
	
	while ( start <= end ) {

		const temp = arr[start]
		arr[start] = arr[end]
		arr[end] = temp

		start++
		end--

	}

}

reverse(arr, 0, shiftArrayBy)
reverse(arr, shiftArrayBy + 1, arr.length - 1)
reverse(arr, 0, arr.length - 1)

console.log(arr)
