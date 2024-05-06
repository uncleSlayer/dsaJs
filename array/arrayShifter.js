const arr = [1,2, 3, 4, 5]

const shiftArrayBy = 2 % arr.length

const temp = []
const ans = []

for ( let i = 0; i < shiftArrayBy; i++ ) {
	
	temp.push(arr[i])	

}

for ( let i = 0; i <= arr.length - (1 + shiftArrayBy); i++ ) {
	
	ans.push(arr[i + shiftArrayBy])

}

for ( let i = 0; i <= temp.length -1; i ++ ) {
	
	ans.push(temp[i])	

}

console.log(ans)

