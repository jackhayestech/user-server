import { getPublicData } from "../getPublicData.user"

describe("Tests for the user get public data function.", () => {
  it("Should return the expected data.", async () => {
    // Test data
    const uuid = "uuid"
    const username = "username"
    const user = { uuid, username, test: "test" }

    // Execute test
    const res = getPublicData(user as any)

    // Expectations
    expect(res).toEqual({ uuid, username })
  })
})
