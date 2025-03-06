import { RandomNumber } from '../Num-math.js';
import run from '../index.js';
console.log('\n\n\nparity-check(проверка на четность)')
const description = '\n\n\nСыграем в проверку на четность)\nотвечай "чет" если число четное, а если нет то ответь "нечет".';
const min = 0;
const max = 100;

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const number = RandomNumber(min, max);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'чет' : 'нечет';
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
