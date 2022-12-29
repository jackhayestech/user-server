import { checkIfUserExists } from "../utils.createUser"
import { User } from "../../../db"

describe("Tests for the create user utils.", () => {
  describe("Tests for the check if user exists function.", () => {
    it.each([[true], [false]])("Should return %p if user is found.", async (val: any) => {
      // Test data
      const username = "username"

      // Mocks
      const spy = jest.spyOn(User, "getByUsername").mockResolvedValue(val)

      // Execute
      const res = await checkIfUserExists(username)

      // Expectations
      expect(res).toEqual(val)
      expect(spy).toHaveBeenCalledWith(username)
    })
  })
})
