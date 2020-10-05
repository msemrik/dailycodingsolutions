const main = require('../main.js')

describe('testing', ()=> {

    testWithClass(main)

    function testWithClass(classToTest) {

        it(`${classToTest.id}- minimum example`, ()=> {
            const minimumString = '1'
            expect(main(minimumString)).toEqual(1)
        })

        it(`${classToTest.id}- not complex number example`, ()=> {
            const minimumString = '38'
            expect(main(minimumString)).toEqual(1)
        })

        it(`${classToTest.id}- complex number example`, ()=> {
            const minimumString = '11'
            expect(main(minimumString)).toEqual(2)
        })

        it(`${classToTest.id}- super complex number example`, ()=> {
            const minimumString = '111'
            expect(main(minimumString)).toEqual(3)
        })

        it(`${classToTest.id}- super complex number example`, ()=> {
            const minimumString = '1111'
            expect(main(minimumString)).toEqual(5)
        })

        it(`${classToTest.id}- vineetjohn example`, ()=> {
            const minimumString = '1311'
            expect(main(minimumString)).toEqual(4)
        })

        it(`${classToTest.id}- vineetjohn example`, ()=> {
            const minimumString = '81'
            expect(main(minimumString)).toEqual(1)
        })
    }
})