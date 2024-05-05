const arr = [15, 2, 16, 3, 4, 5, 11]

let largest = 0
let secondLargest = 0


for ( let i = 0; i <= arr.length -1; i ++ ) {
	
	if ( arr[i] > arr[largest] ) {
		largest = i	
	}	
	
	else if ( arr[i] > arr[secondLargest] && arr[i] < arr[largest] ) {
		secondLargest = i
	}

}

console.log(largest, secondLargest)
