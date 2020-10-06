const Node = require('../../../../commonclasses/Node')
const main = require('../main.js')

describe('testing', ()=> {

    testWithClass(main)

    function testWithClass(classToTest) {

        it(`${classToTest.id}- daily coding scenario`, ()=> {
            expect(main([2, 4, 6, 2, 5])).toEqual(13)
        })

        it(`${classToTest.id}- daily coding scenario 2`, ()=> {
            expect(main([5, 1, 1, 5])).toEqual(10)
        })
    }
})