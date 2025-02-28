import { RandomNumber, RandomIndex } from '../Num-math.js';
import run from '../index.js';

const description = 'Поиграем в калькулятор:)\n\n\nНайди значение выражения';
const signs = ['+', '-', '*', '/', '%', '**'];
const min = 0;
const min2 = 1;
const max = 50;
const max2 = 5;

const calculator = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    case '**':
      return a ** b;
    default:
      throw new Error(`There is no such operator like '${sign}'!`);
  }
};

const generateRound = () => {
  const num1 = RandomNumber(min, max);
  const num2 = RandomNumber(min2, max2);
  const sign = signs[RandomIndex(signs)];
  const question = `${num1} ${sign} ${num2}`;
  const correctAnswer = calculator(num1, num2, sign).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
