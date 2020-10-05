module.exports = function(string) {
    return innerLoop(string)
}


function innerLoop(string) {
    let count =  0

    if(string.length < 2) {
        return string.length
    }

    count += innerLoop(string.slice(1))

    if(string.length > 1 && (+(''+string[0] + string[1]) <= 26)) {
        if(string.length == 2) {
            count += 1
        }
        count += innerLoop(string.slice(2))
    }

    return count
}