import readlineSync from 'readline-sync';

export default () => {
  console.log('\n\n\n<<Brain-Games>>\n');
  console.log('Добро пожаловать в "Игры Разума!"');
  const name = readlineSync.question('Как тебя зовут??:) ');
  console.log(`Привет, ${name}!:3`); };