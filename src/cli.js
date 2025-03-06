import readlineSync from 'readline-sync';

export default () => {
  console.log('\n\n\n<<Brain-Games>>\n');
  console.log('Добро пожаловать в "Игры Разума!👋👋👋"');
  const name = readlineSync.question('Как тебя зовут??🙃🙃🙃 ');
  console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nПривет, ${name}!😁😁😁\n\nТебя ждет 5 игр! Чтобы начать играть, напиши "make" и название желаемой игры\n\n\n\nСписок игр:\nparity-check(проверка на четность)\ncalculator(калькулятор)\nNOD(НОД:наибольший общий делитель)\nprogress(Арифметическая прогрессия)\nsimple(простой-сложный)`);};
