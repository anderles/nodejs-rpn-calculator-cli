export default function isValidNumber(value: string): boolean {
    return !isNaN(Number(value));
  }