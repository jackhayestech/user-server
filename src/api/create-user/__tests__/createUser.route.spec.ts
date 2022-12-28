import { createUserRoute } from "../createUser.route"
import * as cont from "../createUser.controller"

describe("Tests for the create user route.", () => {
  it("Should set the res data correctly.", async () => {
    // Test data
    const data = "data"
    const req: any = { body: { data } }
    const res: any = { data: {} }
    const expected: any = "expected"

    // Mocks
    const spy = jest.spyOn(cont, "createUser").mockResolvedValue(expected)

    // Execution
    await createUserRoute(req, res)

    // Expectations
    expect(res.data).toEqual(expected)
    expect(spy).toBeCalledWith(data)
  })
})
