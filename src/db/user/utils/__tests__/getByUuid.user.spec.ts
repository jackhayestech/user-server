import { User } from "../../user.model"

import { getByUuid } from "../getByUuid.event"

describe("Tests for the get by uuid function.", () => {
  it("Should return the expected data.", async () => {
    // Test data
    const uuid = "uuid"
    const expected: any = { expected: "expected" }

    // Mocks
    const spy = jest.spyOn(User, "findOne").mockResolvedValue(expected)

    // Execute test
    const res = await getByUuid(uuid)

    // Expectations
    expect(res).toEqual(expected)
    expect(spy).toHaveBeenCalledWith({ where: { uuid } })
  })
})
