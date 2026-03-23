import { selectFirstElement } from "./index"
import { Either } from 'effect'

describe('test for circular selection', () => {
    test("should be select first element", () => {
        const items = [1, 2, 3, 4, 5, 6, 7, 8]
        const acturl = selectFirstElement(items)
        expect(Either.isRight(acturl))
        if (Either.isRight(acturl)) {
            expect(acturl.right).toStrictEqual(1)
        }
    })
})