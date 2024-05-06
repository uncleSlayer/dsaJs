const arr = [1, 2, 3, 4, 5]

const arr2 = [1, 2, 5, 6, 4]

const isSorted = (arra) => {

	let isSorted = true

	for (let i = 0; i < arra.length; i++) {
	
		if ( arra[i] > arra[i + 1] ) isSorted = false

	}

	return isSorted

}


console.log(isSorted(arr), isSorted(arr2))
