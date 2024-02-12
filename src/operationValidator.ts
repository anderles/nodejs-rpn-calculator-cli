import colors from "colors";
import { stringValidator } from "./stringValidator";
import { isOperator } from "./operations";
import isValidNumber from "./numberValidator";
import { getMessage } from "./messages";

export function isOperationValid(value: string[]): boolean {

  if (!stringValidator(value)) {
    return false;
  }

  const _isSingleLine = value.length >= 3;

  if (!_isSingleLine) {
    return true;
  }

  const amountOperators = value.filter(isOperator).length;
  const amountNumbers = value.filter(isValidNumber).length;
  const sum = amountNumbers - amountOperators;
  const isOperationValid = sum === 1;

  if (!isOperationValid) {
    if (sum < 1) {
        console.log(colors.red(getMessage(`Too many operators.`)));
    } else if (sum > 1) {
        console.log(colors.red(getMessage(`Not enough operators.`)));
    }
  }

  return isOperationValid;
}