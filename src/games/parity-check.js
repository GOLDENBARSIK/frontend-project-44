import { RandomNumber } from '../RandomNum.js';
import run from '../add-to-games.js';

const description = '\n\n\nСыграем в проверку на четность)\nотвечай "чет" если число четное, а если нет то ответь "нечет".';
const minRange = 0;
const maxRange = 100;

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const number = RandomNumber(minRange, maxRange);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'чет' : 'нечет';
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
