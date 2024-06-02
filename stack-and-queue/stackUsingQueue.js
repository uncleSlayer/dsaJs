const arr = [1, 2, 3, 4, 5, 6, 10]

class Queue {

    constructor() {
        this.value = []
        this.top = this.getTop()
    }

    getTop() {
        return this.value[0]
    }

    pop() {
        const temp = this.value.shift()
        this.top = this.value[0]
        return temp
    }

    isEmpty() {
        return this.value.length === 0
    }

    push(val) {
        this.value.push(val)
        this.top = this.value[0]
    }

    getLength() {
        return this.value.length
    }

}

const tempQ = new Queue()
const ansQ = new Queue()

for (const num of arr) {


    tempQ.push(num)

    while (ansQ.getLength() > 0) {

        tempQ.push(ansQ.pop())

    }

    while (tempQ.getLength() > 0) {
        ansQ.push(tempQ.pop())
    }

}