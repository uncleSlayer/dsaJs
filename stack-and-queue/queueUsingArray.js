class Queue {
    constructor() {
        this.value = []
        this.top = this.value[0]
    }

    push(val) {
        this.value.push(val)
    }

    pop(val) {
        if (this.isEmpty()) {
            throw new Error('Queue is empty')
        }
        return this.value.shift()
    }

    isEmpty() {
        return this.value.length === 0
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty')
        }
        return this.top
    }

    size() {
        return this.value.length
    }

    clear() {
        this.value = []
    }
}