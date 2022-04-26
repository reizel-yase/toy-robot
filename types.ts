type Direction = "EAST" | "WEST" | "NORTH" | "SOUTH"
type Command = "PLACE" | "MOVE" | "LEFT" | "RIGHT" | "REPORT"

interface PlaceParameters {
  x?: number,
  y?: number,
  direction?: Direction
}

interface CommandString {
  command: Command,
  parameters: PlaceParameters
}

export { Direction, Command, CommandString, PlaceParameters }