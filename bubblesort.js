const arr = [13, 46, 24, 52, 20, 9]

for (let i = arr.length - 1; i > 0; i++) {
	for(let j = 0; j < arr.length - 1; j++) {
	
		if (arr[j] > arr[j+1]) {
			let temp = arr[j]
			arr[j] = arr[j+1]
			arr[j+1] = temp
		}

	}
}

console.log(arr)
