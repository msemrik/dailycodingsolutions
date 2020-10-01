module.exports.process = function (array) {
    const returnArray = []
    for(let i = 0; i < array.length; i++) {
        let multiplicationResult = 1
        for(let j = 0; j < array.length; j++) {
            if(i !== j) {
                multiplicationResult *= array[j]
            }
        }
        returnArray[i] = multiplicationResult
    }

    return returnArray
}

module.exports.id = 'withoutdivision'