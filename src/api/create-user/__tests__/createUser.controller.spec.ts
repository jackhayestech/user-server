import { createUser } from "../createUser.controller"
import { User } from "../../../db"

describe("Tests for the create user controller.", () => {
  it("Should return the expected data.", async () => {
    // Test data
    const data: any = { test: "test" }
    const uuid = "userUuid"
    const userPublicData = { data: "test" }
    const eventData: any = { uuid: uuid, getPublicData: () => userPublicData }

    // Mocks
    const spy = jest.spyOn(User, "make").mockResolvedValue(eventData)

    // Execution
    const res = await createUser(data)

    // Expectations
    expect(res).toEqual(userPublicData)
    expect(spy).toBeCalledWith(data)
  })
})
