jest.mock("../table_definitions/event.tableDef")
jest.mock("../table_definitions/eventOwnership.tableDef")

import { db } from "../db"

jest.mock("sequelize", () => {
  const mSequelize = {
    authenticate: jest
      .fn()
      .mockImplementationOnce(jest.fn())
      .mockRejectedValueOnce(() => {
        throw ""
      }),
  }
  const actualSequelize = jest.requireActual("sequelize")
  const mModel = jest.fn().mockImplementation(() => ({
    init: jest.fn(),
  }))
  return { Sequelize: jest.fn(() => mSequelize), DataTypes: actualSequelize.DataTypes, Model: mModel }
})

describe("Tests for the db function.", () => {
  it("Should run without error.", async () => {
    process.env.DB_URL = "test"
    await expect(db()).resolves.not.toThrow()
  })

  it("Should throw error.", async () => {
    process.env.DB_URL = "test"
    await expect(db()).rejects.toThrow()
  })
})
