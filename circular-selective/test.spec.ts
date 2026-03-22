
describe('test for circular selection',()=>{
    test("should be select first element",()=>{
        const items = [1,2,3,4,5,6,7,8]
        const acturl = selectFirstElement(items)
        expect(acturl).toBe(1)
    })
})