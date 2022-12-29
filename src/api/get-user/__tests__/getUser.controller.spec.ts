import * as se from "@jh-tech/response-object"

import { getUser } from "../getUser.controller"
import { User } from "../../../db"

describe("Tests for the get user controller.", () => {
  it("Should return the expected data.", async () => {
    // Test data
    const userUuid = "userUuid"
    const uuid = "uuid"
    const userData: any = "userData"
    const user: any = { uuid, getPublicData: () => userData }

    // Mocks
    const gbuSpy = jest.spyOn(User, "getByUuid").mockResolvedValue(user)

    // Execute test
    const res = await getUser(userUuid)

    // Expectations
    expect(res).toEqual(userData)
    expect(gbuSpy).toBeCalledWith(userUuid)
  })

  it("Should throw error when no user is found.", async () => {
    // Test data
    const userUuid = "userUuid"
    const mess = `No user found with uuid ${userUuid}`

    // Mocks
    jest.spyOn(User, "getByUuid").mockResolvedValue(null)
    const spy = jest.spyOn(se, "ServerError")

    // Execute test
    await expect(getUser(userUuid)).rejects.toThrow()
    expect(spy).toHaveBeenCalledWith("getUser-userNotFound", mess, 404, "User not found", mess)
  })
})
