import { RandomNumber } from '../Num-math.js';
import run from '../index.js';

const description = 'Найди наибольший общий делитель :3.\n\n\n';
const min = 0;
const max = 10;

const getGCD = (x, y) => (y === 0 ? x : getGCD(y, x % y));

const generateRound = () => {
  const num1 = RandomNumber(min, max);
  const num2 = RandomNumber(min, max);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGCD(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
