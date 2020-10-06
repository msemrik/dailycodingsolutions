module.exports = function(tree) {
    return innerLoop(tree)
}


function innerLoop(tree) {
    let count = 0


    const left = !tree.left || (tree.left.value === tree.value && innerLoop(tree.left))
    let right
    if(left) {
        right = !tree.right || (tree.right.value === tree.value && innerLoop(tree.right))
    }

    if(left && right) {
        count++
    }

    if(tree.left) {
        count += innerLoop(tree.left)
    }

    if(tree.right) {
        count += innerLoop(tree.right)
    }

    return count
}