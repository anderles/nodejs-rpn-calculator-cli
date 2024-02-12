import { getMessage } from './messages';
import isValidNumber from './numberValidator';
import { isOperator } from './operations';
import colors from "colors";

export function isValidString(text: string): boolean {
    return isOperator(text) || isValidNumber(text);
  }

export function stringValidator(text: string[]): boolean {
  const _isValid = text.every(isValidString);

  if (!_isValid) {
    console.log(colors.red(getMessage(`Invalid character`)));
  }

  return _isValid;
}