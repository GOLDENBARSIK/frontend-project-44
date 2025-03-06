import { RandomNumber, RandomIndex } from '../Num-math.js';
import run from '../index.js';
console.log('\n\n\ncalculator(калькулятор)')
const description = 'Поиграем в калькулятор:)\n\n\nНайди значение выражения\n(если ответ не целый то округлить до 16 знаков после запятой)';
const signs = ['+', '-', '*'];
const min = 0;
const min2 = 0;
const max = 100;
const max2 = 100;

const calculator = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`нету такого знака'${sign}'!`);
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
