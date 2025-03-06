import { RandomNumber } from '../Num-math.js';
import run from '../index.js';
console.log('\n\n\nsimple(простой-сложный)')
const description = 'Если число простое напиши "да" а если сложное то напиши "нет"👀👀👀.';
const min = 0;
const max = 100;

const isPrime = (num) => {
  const limit = Math.sqrt(num);
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = RandomNumber(min, max);
  const question = num.toString();
  const correctAnswer = isPrime(num) ? 'да' : 'нет';
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
