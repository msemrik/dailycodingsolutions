const main = require('../main.js')
const Node = require('../../../../commonclasses/Node')

describe('testing', ()=> {

    testWithClass(main)

    function testWithClass(classToTest) {
        it(`${classToTest.id}- vineetjohn example`, ()=> {
            const node = new Node('a', new Node('b',new Node('d'), new Node('e')),new Node('c', new Node('f'), new Node('g')))
            const serializedAndDeserialized = classToTest.process(node)
            expect(serializedAndDeserialized).toEqual(node)
        })

        it(`${classToTest.id}- should serialize and deserialize to same object`, ()=> {
            const node = new Node('root', new Node('left', new Node('left.left'), new Node('left.right')), new Node('right', undefined, new Node('right.right')))
            const serializedAndDeserialized = classToTest.process(node)
            expect(serializedAndDeserialized).toEqual(node)
        })

        it(`${classToTest.id}- should throw an error if parameter is not a node`, async ()=> {
            await expect(() => classToTest.process(undefined)).toThrowError('Received object is not a node')
        })
    }
})