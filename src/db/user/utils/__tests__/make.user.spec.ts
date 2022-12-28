jest.mock("uuid")
jest.mock("sequelize")
import { v4 as uuidv4 } from "uuid"
import bcrypt from "bcrypt"

import * as util from "../../../util.db"
import { User } from "../../user.model"
import { make } from "../make.user"

describe("Tests for the make function.", () => {
  it("Should return the expected data.", async () => {
    // Test data
    const password = "password"
    const data: any = { test: "test", password }
    const expected: any = "expected"
    const uuid = "uuid"
    const salt = "salt"
    const hash = "hash"

    // Mocks
    ;(uuidv4 as jest.Mock).mockImplementation(() => uuid)
    const ucSpy = jest.spyOn(User, "create").mockResolvedValue(expected)
    jest.spyOn(bcrypt, "genSalt").mockImplementation(async () => salt)
    const hSpy = jest.spyOn(bcrypt, "hash").mockImplementation(async () => hash)

    // Execute test
    const res = await make(data)

    // Expectations
    expect(res).toEqual(expected)
    expect(ucSpy).toHaveBeenCalledWith({ ...data, uuid, password: hash })
    expect(hSpy).toHaveBeenCalledWith(password, salt)
  })

  it("Should throw a db error", async () => {
    // Test data
    const error: any = "error"

    // Mocks
    jest.spyOn(util, "dbError").mockImplementationOnce((e: any) => e)
    jest.spyOn(User, "create").mockRejectedValue(() => {
      throw error
    })

    // Expectations
    await expect(make(1 as any)).rejects.toThrow(error)
  })
})
