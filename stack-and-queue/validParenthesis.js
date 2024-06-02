const arr = ['(', '(', '}', '[', '{', '}', ']', ')', ')']

const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
}

class Stack {

    constructor() {
        this.value = []
    }

    push(val) {
        this.value.push(val)
    }

    pop() {
        if (this.value.length > 0) {
            return this.value.pop()
        } else {
            throw new Error('No values in stack')
        }
    }

    isEmpty() {
        if (this.value.length > 0) return false
        else return true
    }

}

const stackOne = new Stack()

function checkIfValid(s) {

    for (let i = 0; i <= arr.length - 1; i++) {

        if (arr[i] in pairs) {

            if (stackOne.isEmpty()) {
                return false
            } else {
                const lastVal = stackOne.pop()
                console.log('index is', i);
                console.log('last value in stack is: ', lastVal);
                console.log('current pointer value is: ', arr[i]);
                if (pairs[arr[i]] !== lastVal) return false
            }

        } else {

            stackOne.push(arr[i])

        }

    }

    if (stackOne.isEmpty()) {
        return true
    } else {
        console.log(stackOne.value);
        return false
    }

}

console.log(checkIfValid(stackOne));