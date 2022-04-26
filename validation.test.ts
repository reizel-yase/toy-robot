import { isValidCommand, isValidPosition } from "./validation"

describe("IsValidCommand", () => {
  it("PLACE 0,1,NORTH should return true", () => {
    expect(isValidCommand("PLACE 0,1,NORTH")).toBe(true)
  })

  it("MOVE", () => {
    expect(isValidCommand("MOVE")).toBe(true)
  })

  it("RIGHT", () => {
    expect(isValidCommand("RIGHT")).toBe(true)
  })

  it("LEFT", () => {
    expect(isValidCommand("LEFT")).toBe(true)
  })

  it("REPORT", () => {
    expect(isValidCommand("REPORT")).toBe(true)
  })

  it("INVALID COMMAND", () => {
    expect(isValidCommand("INVALID COMMAND")).toBe(false)
  })
})

describe("IsValidPosition", () => {
  it("0", () => {
    expect(isValidPosition(0)).toBe(true)
  })

  it("1", () => {
    expect(isValidPosition(0)).toBe(true)
  })

  it("-1", () => {
    expect(isValidPosition(-1)).toBe(false)
  })

  it("5", () => {
    expect(isValidPosition(5)).toBe(false)
  })
})