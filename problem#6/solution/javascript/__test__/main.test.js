const main = require('../main.js')
const LinkedXORList = require('../LinkedXORList')

describe('testing', ()=> {

    testWithClass(main)

    function testWithClass(classToTest) {

        it(`${classToTest.id}- example`, ()=> {
            const list = new LinkedXORList()
            list.add(1)
            list.add(2)
            list.add(3)
            expect(list.get(0)).toEqual(1)
            expect(list.get(1)).toEqual(2)
            expect(list.get(2)).toEqual(3)
            expect(() => list.get(3)).toThrowError(3)
        })
        //
        // it(`${classToTest.id}- should throw an exception if not of Pair instance`, ()=> {
        //
        //     expect(() => main.car({})).toThrowError()
        //     expect(() => main.cdr({})).toThrowError()
        // })
    }
})