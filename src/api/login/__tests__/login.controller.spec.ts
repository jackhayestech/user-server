import * as se from "@jh-tech/response-object"
import bcrypt from "bcrypt"

import { login } from "../login.controller"
import { User } from "../../../db"

describe("Tests for the get user controller.", () => {
  it("Should return the expected data.", async () => {
    // Test data
    const username = "username"
    const data: any = { username }
    const uuid = "userUuid"
    const userPublicData = { data: "test" }
    const userData: any = { uuid: uuid, getPublicData: () => userPublicData }

    // Mocks
    const gbuSpy = jest.spyOn(User, "getByUsername").mockResolvedValue(userData)
    jest.spyOn(bcrypt, "compare").mockImplementation(async () => true)

    // Execute test
    const res = await login(data)

    // Expectations
    expect(res).toEqual(userPublicData)
    expect(gbuSpy).toBeCalledWith(username)
  })

  it("Should throw error when no user is found.", async () => {
    // Test data
    const username = "username"
    const data: any = { test: "test", username }
    const mess = `No user found with username ${data.username}`

    // Mocks
    jest.spyOn(User, "getByUsername").mockResolvedValue(null)
    const spy = jest.spyOn(se, "ServerError")

    // Execute test
    await expect(login(data)).rejects.toThrow()
    expect(spy).toHaveBeenCalledWith("login-userNotFound", mess, 404, "User not found", mess)
  })

  it("Should throw error when passwords don't match.", async () => {
    // Test data
    const username = "username"
    const password = "password"
    const data: any = { test: "test", username, password }
    const mess = `No user found with username ${data.username}`

    // Mocks
    jest.spyOn(User, "getByUsername").mockResolvedValue({ password: "test" } as any)
    jest.spyOn(bcrypt, "compare").mockImplementation(async () => false)
    const spy = jest.spyOn(se, "ServerError")

    // Execute test
    await expect(login(data)).rejects.toThrow()
    expect(spy).toHaveBeenCalledWith("login-userNotFound", mess, 404, "User not found", mess)
  })
})
