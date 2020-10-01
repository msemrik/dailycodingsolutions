module.exports.process = function (array, value) {
    if(array && array.length > 0) {
        for(let i = 0; i < array.length; i++) {
            index = i + 1
            for(let j = index; j < array.length; j++) {
                if(array[i]+array[j] === value) {
                    return true
                }
            }
        }
    }

    return false
}