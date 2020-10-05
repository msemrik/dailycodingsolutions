const main = require('../main.js')
const Pair = require('../../../../commonclasses/Pair')

describe('testing', ()=> {

    testWithClass(main)

    function testWithClass(classToTest) {
        it(`${classToTest.id}- daily coding example`, ()=> {
            const FIRST_VALUE = 1
            const SECOND_VALUE = 2

            const pair = new Pair(FIRST_VALUE, SECOND_VALUE)
            expect(main.car(pair)).toEqual(FIRST_VALUE)
            expect(main.cdr(pair)).toEqual(SECOND_VALUE)
        })

        it(`${classToTest.id}- should throw an exception if not of Pair instance`, ()=> {

            expect(() => main.car({})).toThrowError()
            expect(() => main.cdr({})).toThrowError()
        })
    }
})