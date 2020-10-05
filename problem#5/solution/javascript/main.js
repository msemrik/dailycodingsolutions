const Pair = require('../../../commonclasses/Pair')

module.exports.car = function (pair) {
    if (!(pair instanceof Pair)) {
       throw new Exception()
    } else {
        return pair.first
    }
}

module.exports.cdr = function (pair) {
    if (!(pair instanceof Pair)) {
        throw new Exception()
    } else {
        return pair.last
    }
}

module.exports.id = 'main'