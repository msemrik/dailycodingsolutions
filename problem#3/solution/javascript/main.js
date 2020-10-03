const Node = require('../../../commonclasses/Node')

module.exports.process = function (node) {
    const serialized = BinaryTree.serialize(node)
    return BinaryTree.deserialize(serialized)
}

function serialize(node) {
    if (node instanceof Node) {
        let stringToReturn = node.value
        if (node.left) {
            stringToReturn += ' ' + serialize(node.left)
        } else {
            stringToReturn += ' #'
        }

        if (node.right) {
            stringToReturn += ' ' + serialize(node.right)
        } else {
            stringToReturn += ' #'
        }

        return stringToReturn
    } else {
        throw new Error('Received object is not a node')
    }
}

function deserialize(string) {
    return innerDeserialize(string)[0]
}
function innerDeserialize(string) {
    const arrayOfObjects = string.split(' ')
    const value = arrayOfObjects[0]
    let root = undefined

    let remainingString = arrayOfObjects.slice(1).join(' ')
    if (value !== '#') {
        root = new Node(value)
        let [returnedLeft, returnedRemainingStringLeft] = innerDeserialize(remainingString)
        root.left = returnedLeft
        remainingString = returnedRemainingStringLeft
        if (remainingString) {
            const [returnedRight, returnedRemainingStringRight] = innerDeserialize(remainingString)
            root.right = returnedRight
            remainingString = returnedRemainingStringRight
        }
    }


    return [root, remainingString]
}

const BinaryTree = {
    serialize: serialize,
    deserialize: deserialize
}
module.exports.BinaryTree = BinaryTree

module.exports.id = 'main'