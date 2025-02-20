import readlineSync from 'readline-sync';

export default () => {
  console.log('добро пожаловать в Игры Разума!');
  const name = readlineSync.question('Как тебя зовут? ');
  console.log(`Привет, ${name}!`);
};
