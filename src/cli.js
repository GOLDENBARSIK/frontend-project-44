import readlineSync from 'readline-sync';

export default () => {
  console.log('\n\n\n<<Brain-Games>>\n');
  console.log('Добро пожаловать в "Игры Разума!"');
  const name = readlineSync.question('Как тебя зовут??:) ');
  console.log(`\n\n\n\n\n\nПривет, ${name}!:3\n\nТебя ждет 5 игр! Чтобы начать играть, напиши "make" и название желаемой игры\n\nСписок игр:\nпроверка на четность\n...\n...\n...\n...`);};
