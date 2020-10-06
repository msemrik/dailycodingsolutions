module.exports = function(arrayOfValues) {
    return innerLoop(arrayOfValues)
}


function innerLoop(arrayOfValues) {
    let maxCombination = 0

    if(arrayOfValues.length === 0) {
        maxCombination = 0
    } else if(arrayOfValues.length === 1) {
        maxCombination = arrayOfValues[0]
    } else {
        let usingFirstValueCombination = arrayOfValues[0] + innerLoop(arrayOfValues.slice(2))
        let usingSecondValueCombination = arrayOfValues[1] + innerLoop(arrayOfValues.slice(3))
        maxCombination = usingFirstValueCombination > usingSecondValueCombination? usingFirstValueCombination : usingSecondValueCombination
    }

    return maxCombination
}