
const arr = [13, 46, 24, 52, 20, 9]

for (let i = 0; i <= arr.length -1; i++){
	
	let j = i

	while( j > 0 && arr[j] < arr[j-1] ){
		
		const temp = arr[j]
		arr[j] = arr[j-1]
		arr[j-1] = temp
		j--
	}	

}

console.log(arr)
