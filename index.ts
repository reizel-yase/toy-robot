import * as readline from "readline"
import ToyRobot from "./ToyRobot"

const challenge = new ToyRobot()

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ask = () => prompt.question("", input => {
  challenge.doCommand(input)

  ask()
})

readline.emitKeypressEvents(process.stdin);

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl === true && key.name === "c") {
      process.exit()
    } else prompt.resume()
})

ask()