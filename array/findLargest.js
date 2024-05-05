const arr = [4, 7, 8, 6, 7, 16, 6, 17]

let largestEl = 0

for ( let i = 0; i <= arr.length -1; i++  ){
	largestEl = Math.max(arr[i], largestEl)	
}

console.log(largestEl)
