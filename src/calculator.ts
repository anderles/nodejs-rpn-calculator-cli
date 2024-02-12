import { getMessage } from "./messages";
import  { operators, isOperator } from "./operations";
import colors from "colors";

export default function calculator(num: number[], items: string[]): number[] {
  let isError = false;

  for (const item of items) {
    if (isOperator(item)) {
      const lastNumber = num.pop();
      const secondLastNumber = num.pop();

      if (lastNumber === undefined || secondLastNumber === undefined) {
        console.log(colors.red(getMessage( `Wrong amount of numbers.`)));
        isError = true;
        break;
      }

      if (item === '/' && lastNumber === 0) {
        console.log(colors.red(getMessage(`Division by zero is not allowed`)));
        isError = true;
        break;
      }

      const result = operators[item](secondLastNumber, lastNumber);

      if (isNaN(result)) {
        console.log(colors.red(getMessage(`Invalid operation.`)));
        isError = true;
        break;
      }

      num.push(result);
    } else {
      num.push(Number(item));
    }
  }

  return isError ? [] : num;
}