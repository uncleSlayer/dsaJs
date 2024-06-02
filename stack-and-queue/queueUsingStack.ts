const arrWoo = [1, 2, 3, 4, 5, 7, 10]

class Stack {

    value: number[]

    constructor() {
        this.value = []
    }

    push(value: number) {
        this.value.push(value)
    }

    pop() {
        if (this.value.length === 0) {
            return
        }
        return this.value.pop()
    }

    peek() {
        return this.value[this.value.length - 1]
    }

    size() {
        return this.value.length
    }

    isEmpty() {
        return this.value.length === 0
    }

}

const stack1 = new Stack()

const stack2 = new Stack()

for (const val of arrWoo) {
    stack1.push(val)
}

for (let i = 0; i < arrWoo.length; i++) {

    while (stack1.size() > 0) {
        const poppedValue = stack1.pop()

        if (poppedValue !== undefined) {
            stack2.push(poppedValue)
        }

    }
}

console.log(stack2.value)
