module.exports = function () {
    this.head = undefined
    this.tail = undefined

    this.add = function(value) {
        const element = new Element(value)
        if(!this.head) {
            this.head = element
        } else {
            element.both = this.tail.positionInMemory
            this.tail.both = this.tail.both ^ element.positionInMemory
        }
        this.tail = element
    }

    this.get = function(index) {
        let element = this.head
        let nextValue = this.head.both
        for(let i=0; i < index; i++) {
            let prevElementPosition = element.positionInMemory
            element = memory[nextValue]
            if(!element) {
                throw new Error('Index out of bounds')
            }
            nextValue = element.both ^ prevElementPosition
        }

        return element.value
    }
}

const memory = {}

function Element(value) {
    this.positionInMemory = Math.floor(Math.random() * 10000)
    this.value = value
    this.both = 0

    memory[this.positionInMemory] = this
}