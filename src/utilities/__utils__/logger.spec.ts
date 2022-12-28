import { logger } from "../logger"

describe("Tests for the logger function.", () => {
  it("Should call the console log function.", () => {
    // Test data
    const data = "data"

    // Mocks
    const spy = jest.spyOn(console, "log").mockImplementation()

    // Execute
    logger(data)

    // Expectations
    expect(spy).toHaveBeenCalledWith(data)
  })
})
