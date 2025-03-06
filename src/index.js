import readlineSync from 'readline-sync';

const attemptsCount = 3;

export default (description, generateRound) => {
  console.log('\n\nИ снова приветствую в "Игры Разума!😉😉😉"\n');
  const Name = readlineSync.question('Напомни как тебя зовут??😅😅😅\n');
  console.log(`\n\n\nПриветики, ${Name}!:3\n`);
  console.log(description);

  for (let i = 1; i <= attemptsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`\n\n\nВопрос: ${question}`);
    const Panswer = readlineSync.question('Ваш ответ: ');
    if (Panswer !== correctAnswer) {
      console.log(`\n\n\n\n"${Panswer}" неправильный ответ😿😿😿 правильный ответ "${correctAnswer}"😒😒😒`);
      console.log(`\n\nДавай-ка еще разок, ${Name}!🥹 🥹 🥹\n`);
      return;
    }
    console.log('верно!😻');
  }

  console.log(`\n\nПоздравляю, ${Name}!🥳🥳🥳🥳🥳🥳🥳🥳🥳`);
};
