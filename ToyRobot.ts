import { Command, CommandString, Direction, PlaceParameters } from "./types"
import { isValidPosition, isValidCommand } from "./validation"

const VALID_DIRECTION = ["EAST", "WEST", "NORTH", "SOUTH"]

export default class ToyRobot {
  started: boolean = false
  posX: number = null
  posY: number = null
  direction: Direction = null

  parseCommand(commandString): CommandString {
    const [rawCommand, rawParameters]: Array<string | Command> = commandString.split(" ")
    const [xString, yString, directionString]: Array<string> = rawParameters ? rawParameters.split(",") : []
    const command = <Command>rawCommand
    const dir = directionString ? directionString : directionString
    const parameters: PlaceParameters = {
      x: parseInt(xString, 10),
      y: parseInt(yString, 10),
      direction: <Direction>dir
    }
  
    return {
      command,
      parameters
    }
  }

  doCommand(commandInputString):void {
    if (isValidCommand(commandInputString)) {
      const { command, parameters: { x, y, direction: dir } } = this.parseCommand(commandInputString)

      if (command !== "PLACE" && !this.started) {
        // if command is other than PLACE, check if app has already been started
        // else, do not execute command
        return
      }
      else {
        switch(command) {
          case "MOVE":
            this.move();
            break;
          case "LEFT":
            this.left();
            break;
          case "RIGHT":
            this.right();
            break;
          case "REPORT":
            this.report();
            break;
          default:
            this.place(x, y, dir);
            break;
        }
      }
    }
  }

  place(x: number, y: number, dir: Direction):void {
    // only execute command if positions provided are valid
    if (isValidPosition(x) && isValidPosition(y) && VALID_DIRECTION.includes(dir)) {
      // set app to started when it has not been started yet
      if (!this.started) this.started = true
      this.direction = dir
      this.posX = x
      this.posY = y
    }
  }

  move(): void {
    const isHorizontalMove: boolean = !!(this.direction === "WEST" || this.direction === "EAST") 

    if (isHorizontalMove) {
      const newPosX = this.direction === "EAST" ? this.posX + 1 : this.posX - 1

      // Check position before moving
      if (isValidPosition(newPosX)) this.posX = newPosX
    } else {
      const newPosY = this.direction === "NORTH" ? this.posY + 1 : this.posY - 1

      // Check position before moving
      if (isValidPosition(newPosY)) this.posY = newPosY
    }
  }

  left(): void {
    if (this.direction === "NORTH") this.direction = "WEST"
    else if (this.direction === "EAST") this.direction = "NORTH"
    else if (this.direction === "SOUTH") this.direction = "EAST"
    else this.direction = "SOUTH"
  }

  right(): void {
    if (this.direction === "NORTH") this.direction = "EAST"
    else if (this.direction === "EAST") this.direction = "SOUTH"
    else if (this.direction === "SOUTH") this.direction = "WEST"
    else this.direction = "NORTH"
  }

  report(): void {
    console.log(`Output: ${this.posX},${this.posY},${this.direction}`)
  }
}