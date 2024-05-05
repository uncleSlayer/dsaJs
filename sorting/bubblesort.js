const arr = [13, 46, 24, 52, 20, 9]
let didSwap = 0

for (let i = arr.length - 1; i >= 0; i--){
	 for (let j = 0; j < i; j++) {
		 if ( arr[j] > arr[j+1] ){
			const temp = arr[j]
			arr[j] = arr[j + 1]
			arr[j + 1] = temp
			didSwap = 1
		 }	
	 }

	if (didSwap === 0) break;
}

console.log(arr)
