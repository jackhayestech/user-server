import { User } from "../../user.model"

import { getByUsername } from "../getByUsername.event"

describe("Tests for the get by username function.", () => {
  it("Should return the expected data.", async () => {
    // Test data
    const username = "username"
    const expected: any = { expected: "expected" }

    // Mocks
    const spy = jest.spyOn(User, "findOne").mockResolvedValue(expected)

    // Execute test
    const res = await getByUsername(username)

    // Expectations
    expect(res).toEqual(expected)
    expect(spy).toHaveBeenCalledWith({ where: { username } })
  })
})
