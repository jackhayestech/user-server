import { loginRoute } from "../login.route"
import * as control from "../login.controller"

describe("Tests for the get user route.", () => {
  it("Should set the res data correctly.", async () => {
    // Test data
    const data = "data"
    const req: any = { body: { data } }
    const res: any = { data: {} }
    const expected: any = "expected"

    // Mocks
    jest.spyOn(control, "login").mockResolvedValue(expected)

    // Execute test
    await loginRoute(req, res)

    // Expectations
    expect(res.data).toEqual(expected)
  })
})
