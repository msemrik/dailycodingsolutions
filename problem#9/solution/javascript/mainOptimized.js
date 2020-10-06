module.exports = function(tree) {
    return innerLoop(tree)
}


function innerLoop(tree) {
    let count = 0
    let iamunival = false

    let left
    if(!tree.left) {
        left = true
    } else {
        const leftResult = innerLoop(tree.left)
        if(leftResult.iamunival && tree.left.value === tree.value) {
            left = true
        }
        count += leftResult.count
    }

    let right
    let rightResult
    if(!tree.right) {
        right = true
    } else {
        const rightResult = innerLoop(tree.right)
        if(rightResult.iamunival && tree.right.value === tree.value) {
            right = true
        }
        count += rightResult.count
    }

    if(left && right) {
        iamunival = true
        count++
    }

    return {iamunival: iamunival, count: count}
}