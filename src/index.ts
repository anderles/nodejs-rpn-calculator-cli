import * as readline from "node:readline";
import calculator from "./calculator";
import { isOperationValid } from "./operationValidator";
import colors from "colors";

type CommandsCLI = {
    [input: string]: () => void;
  };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commands: CommandsCLI = {
    q: _quit,
    "-quit": _quit,
    c: _clear,
    "-clear": _clear,
  };

let numbers: number[] = [];

function _quit() {
  console.log(colors.blue(`Finish. Bye!`));
  rl.close();
  process.exit(0);
}

function _clear() {
  numbers = [];
  console.log(colors.blue(`cleared`));
}

function _handler(input: string) {
  if (input in commands) {
    commands[input]();
    return;
  }

  const operations = input.split(" ").filter((item) => item !== "");

  if (!isOperationValid(operations)) {
    return;
  }

  numbers = calculator(numbers, operations);

  const i = numbers.length - 1;
  if (i < 0) {
    return;
  }

  const lastNumber =
    !numbers[i].toString().includes(".")
      ? numbers[i].toFixed(1)
      : numbers[i];
  console.log(colors.black(`result: ` + lastNumber));
}

rl.on("line", (answer: string) => {
  _handler(answer);
});