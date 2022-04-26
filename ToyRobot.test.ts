import ToyRobot from "./ToyRobot"

const logSpy = jest.spyOn(console, 'log')

describe("ToyRobot", () => {
  let robot 

  beforeEach(() => robot = new ToyRobot())

  it("should return false if no PLACE command has been entered yet", () => {
    robot.doCommand("MOVE")
    
    expect(robot.started).toBe(false)
  })

  it("should return true if a PLACE command has already been entered", () => {
    robot.doCommand("PLACE 0,0,NORTH")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("NORTH")
    expect(robot.started).toBe(true)
  })

  it("should move to 0,1,NORTH if x: 0, y: 0, f: 'NORTH'", () => {
    robot.doCommand("PLACE 0,0,NORTH")
    robot.doCommand("MOVE")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(1)
    expect(robot.direction).toBe("NORTH")
  })

  it("should move to 0,0,EAST if x: 0, y: 0, f: 'EAST'", () => {
    robot.doCommand("PLACE 0,0,EAST")
    robot.doCommand("MOVE")

    expect(robot.posX).toBe(1)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("EAST")
  })

  it("should move to 0,0,SOUTH from x: 0, y: 0, f: 'EAST'", () => {
    robot.place(0,0,"EAST")
    robot.doCommand("RIGHT")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("SOUTH")
  })

  it("should move to 0,0,WEST from x: 0, y: 0, f: 'NORTH'", () => {
    robot.place(0,0,"NORTH")
    robot.doCommand("LEFT")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("WEST")
  })

  it("should move to 0,0,NORTH from x: 0, y: 0, f: 'EAST'", () => {
    robot.place(0,0,"EAST")
    robot.doCommand("LEFT")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("NORTH")
  })

  it("should move to 0,0,EAST from x: 0, y: 0, f: 'SOUTH'", () => {
    robot.place(0,0,"SOUTH")
    robot.doCommand("LEFT")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("EAST")
  })

  it("should move to 0,0,SOUTH from x: 0, y: 0, f: 'WEST'", () => {
    robot.place(0,0,"WEST")
    robot.doCommand("LEFT")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("SOUTH")
  })

  it("should move to 0,0,WEST from x: 0, y: 0, f: 'SOUTH'", () => {
    robot.place(0,0,"SOUTH")
    robot.doCommand("RIGHT")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("WEST")
  })

  it("should move to 0,0,NORTH from x: 0, y: 0, f: 'WEST'", () => {
    robot.place(0,0,"WEST")
    robot.doCommand("RIGHT")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("NORTH")
  })

  it("should LOG X: 0 Y: 0 F: 'EAST'", () => {
    robot.place(0,0,"EAST")

    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(0)
    expect(robot.direction).toBe("EAST")
  })

  it("should perform action based on command string", () => {
    robot.doCommand("PLACE 0,1,NORTH")
    
    expect(robot.posX).toBe(0)
    expect(robot.posY).toBe(1)
    expect(robot.direction).toBe("NORTH")
  })

  it("should log in the console if report() is called", () => {
    robot.doCommand("PLACE 0,1,NORTH")
    robot.doCommand("REPORT")

    expect(logSpy).toBeCalledWith("Output: 0,1,NORTH")
  })
})