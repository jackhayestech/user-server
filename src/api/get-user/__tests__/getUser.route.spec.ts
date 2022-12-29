import { getUserRoute } from "../getUser.route"
import * as control from "../getUser.controller"

describe("Tests for the get user route.", () => {
  it("Should set the res data correctly.", async () => {
    // Test data
    const userUuid = "userUuid"
    const req: any = { params: { userUuid } }
    const res: any = { data: null }
    const expected: any = "expected"

    // Mocks
    jest.spyOn(control, "getUser").mockResolvedValue(expected)

    // Execute test
    await getUserRoute(req, res)

    // Expectations
    expect(res.data).toEqual(expected)
  })
})
