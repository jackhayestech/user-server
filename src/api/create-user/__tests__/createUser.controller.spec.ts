import * as se from "@jh-tech/response-object"

import { createUser } from "../createUser.controller"
import { User } from "../../../db"
import * as utils from "../utils.createUser"

describe("Tests for the create user controller.", () => {
  it("Should return the expected data.", async () => {
    // Test data
    const data: any = { test: "test" }
    const uuid = "userUuid"
    const userPublicData = { data: "test" }
    const eventData: any = { uuid: uuid, getPublicData: () => userPublicData }

    // Mocks
    const spy = jest.spyOn(User, "make").mockResolvedValue(eventData)
    jest.spyOn(utils, "checkIfUserExists").mockResolvedValue(false)

    // Execution
    const res = await createUser(data)

    // Expectations
    expect(res).toEqual(userPublicData)
    expect(spy).toBeCalledWith(data)
  })

  it("Should throw error when user name is taken", async () => {
    // Test data
    const data: any = { test: "test" }
    const mess = `A username already exists with that name`

    // Mocks
    jest.spyOn(User, "getByUuid").mockResolvedValue(null)
    jest.spyOn(utils, "checkIfUserExists").mockResolvedValue(true)
    const spy = jest.spyOn(se, "ServerError")

    // Execution
    await expect(createUser(data)).rejects.toThrow()
    expect(spy).toHaveBeenCalledWith("createUser-userAlreadyExists", mess, 404, "User already exists", `A username already exists with that name`)
  })
})
