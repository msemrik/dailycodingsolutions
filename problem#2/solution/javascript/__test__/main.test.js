const main = require('../main.js')
const mainWithOutDivision = require('../mainWithOutDivision.js')

describe('testing', ()=> {

    testWithClass(main)
    testWithClass(mainWithOutDivision)

    function testWithClass(classToTest) {
        it(`${classToTest.id}- when no items should return false`, ()=> {
            expect(classToTest.process([])).toEqual([])
        })

        it(`${classToTest.id}- normal test`, ()=> {
            expect(classToTest.process([1,2])).toEqual([2, 1])
        })

        it(`${classToTest.id}- normal test`, ()=> {
            expect(classToTest.process([1,2,3])).toEqual([6,3,2])
        })

        it(`${classToTest.id}- daily coding problem example`, ()=> {
            expect(classToTest.process([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24])
        })

        it(`${classToTest.id}- daily coding problem example 2`, ()=> {
            expect(classToTest.process([3, 2, 1])).toEqual([2, 3, 6])
        })
    }
})