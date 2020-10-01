module.exports.process = function (array) {
    const multiplication = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
    return array.map(number => multiplication/number)
}

module.exports.id = 'main'