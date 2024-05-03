const arr = [5, 2, 6, 1, 9, 0];
let max = arr.length - 1

for (let i = arr.length - 1; i > 0; i--){
	for (let j = i; j >= 0; j--) {
		if ( arr[j] > arr[max] ) max = j
	}

	const temp = arr[i]
	arr[i] = arr[max]
	arr[max] = temp

}

console.log(arr)
