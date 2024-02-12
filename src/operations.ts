type OperatorFunc = (a: number, b: number) => number;

type OperatorType = {
  [operator: string]: OperatorFunc;
};

export const operators: OperatorType = {
  "/": (a: number, b: number) => {
    if (b === 0) {
      throw new Error(`Divide by 0`);
    }
    return a / b;
  },
  "-": (a: number, b: number) => a - b,
  "+": (a: number, b: number) => a + b,
  "*": (a: number, b: number) => a * b,
};

export function isOperator(operator: string): boolean {
  return operator in operators;
}