class Stack {

    constructor() {
        this.value = []
        this.top = this.value[this.value.length - 1]
    }

    push(val) {
        this.top = this.value[this.value.length - 1]
        this.value.push(val)
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }
        this.top = this.value[this.value.length - 1]
        return this.value.pop()
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }
        return this.top
    }

    size() {
        return this.value.length
    }

    isEmpty() {
        return this.value.length === 0
    }

    clear() {
        this.value = []
    }

}

const s = new Stack()
s.push(5)
s.push('Hello')
console.log(s.value);