import { RandomNumber, RandomIndex } from '../Num-math.js';
import run from '../index.js';
console.log('\n\n\nprogress(Арифметическая прогрессия)')
const description = 'Какое число отсутствует в прогрессии?';
const minLength = 5;
const maxLength = 10;
const minRange = 1;
const maxRange = 100;
const minStep = 1;
const maxStep = 10;

const Progresscreate = (length, start, step) => {
  const progress = [];
  for (let i = start; progress.length < length; i += step) {
    progress.push(i);
  }
  return progress;
};

const generateRound = () => {
  const length = RandomNumber(minLength, maxLength);
  const start = RandomNumber(minRange, maxRange);
  const step = RandomNumber(minStep, maxStep);
  const progress = Progresscreate(length, start, step);
  const indexHiddenNumber = RandomIndex(progress);
  const correctAnswer = progress[indexHiddenNumber].toString();
  progress[indexHiddenNumber] = '?';
  const question = progress.join(' ');
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
