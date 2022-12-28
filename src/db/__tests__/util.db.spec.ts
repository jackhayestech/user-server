import * as se from "@jh-tech/response-object"

import { dbError } from "../util.db"

describe("Tests for the db utils file.", () => {
  describe("Tests for the db error method.", () => {
    it("Should return the expected data.", () => {
      const error: any = "error"
      const code = "code"
      const expected: any = { test: "expected" }

      const spy = jest.spyOn(se, "ServerError").mockReturnValue(expected)

      const res = dbError(error, code)

      expect(res).toEqual(expected)
      expect(spy).toHaveBeenCalledWith(code, error, 500, "Internal server error", "An unexpected error has occurred please contact us for a resolution.")
    })
  })
})
