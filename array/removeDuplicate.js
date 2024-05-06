const arr = [1,1,2,2,2,3,3]
let checker = 0 // will save index only
const ans = []


for ( let i = 0; i <= arr.length - 1; i++ ) {
	
	if ( ans.length === 0 ) ans.push(arr[i])

	else if ( arr[i] !== arr[checker] ) {
		
		ans.push(arr[i])	
		checker = i	

	}

}

console.log(ans)
