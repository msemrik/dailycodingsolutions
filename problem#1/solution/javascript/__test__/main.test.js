const main = require('../main.js')

describe('test', ()=> {

    it('when no items should return false', ()=> {
        expect(main.process([])).toBeFalsy()
    })

    it('when two number do not sum the number should return false', ()=> {
        expect(main.process([1,2], 4)).toBeFalsy()
    })

    it('when two number do sum the number should return false', ()=> {
        expect(main.process([1,2], 3)).toBeTruthy()
    })

    it('when two non-consecutive number do sum the number should return false', ()=> {
        expect(main.process([1,2,3,4], 6)).toBeTruthy()
    })

    it('internet example', ()=> {
        expect(main.process([10, 15, 3, 7], 17)).toBeTruthy()
    })

    it('internet example2', ()=> {
        expect(main.process([10, 15, 3, 4], 17)).toBeFalsy()
    })
})