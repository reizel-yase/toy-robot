import { Command } from "./types"

const MAX_POSITION = 5
const VALID_COMMANDS = ["MOVE", "LEFT", "RIGHT", "REPORT"]

const isValidCommand = (commandString: string): boolean => {
  const [command, parameters]: Array<Command | string> = commandString.split(" ")
  const [x, y, direction]: Array<number | string | null> = parameters ? parameters.split(",") : [null, null, null]

  if (((command !== "PLACE" && VALID_COMMANDS.includes(command)) || (command === "PLACE" && parameters && x !== undefined && y !== undefined && direction))) return true

  return false
}

const isValidPosition = (position: number): boolean => {
    return position >= 0 && position < MAX_POSITION
}

 export {
  isValidCommand,
  isValidPosition
 }