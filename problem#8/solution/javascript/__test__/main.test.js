const Node = require('../../../../commonclasses/Node')
const main = require('../main.js')
const mainOptimized = require('../mainOptimized')

describe('testing', ()=> {

    testWithClass(main)
    testWithClass(mainOptimized)

    function testWithClass(classToTest) {

        it(`${classToTest.id}- minimum scenario`, ()=> {
            const tree = new Node(0)
            expect(main(tree)).toEqual(1)
        })

        it(`${classToTest.id}- one level`, ()=> {
            const tree = new Node(0)
            expect(main(tree)).toEqual(1)
        })

        it(`${classToTest.id}- daily coding problem example`, ()=> {
            const tree = new Node(0, new Node(1), new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0)))
            expect(main(tree)).toEqual(5)
        })

        it(`${classToTest.id}- vineetjohn example`, ()=> {
            const node_a = new Node('0')
            const node_b = new Node('1')
            const node_c = new Node('0')
            const node_d = new Node('1')
            const node_e = new Node('0')
            const node_f = new Node('1')
            const node_g = new Node('1')
            node_a.left = node_b
            node_a.right = node_c
            node_c.left = node_d
            node_c.right = node_e
            node_d.left = node_f
            node_d.right = node_g
            expect(main(node_a)).toEqual(5)
            expect(main(node_c)).toEqual(4)
            expect(main(node_g)).toEqual(1)
            expect(main(node_d)).toEqual(3)
        })
    }
})