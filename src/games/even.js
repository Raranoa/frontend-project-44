import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const correctOfRounds = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const startGame = () => {
    const number = getRandomNumber(1, 50);
    const answer = isEven(number) ? 'yes' : 'no';
    return [number, answer];
  };

  for (let i = 0; i < correctOfRounds; i += 1) {
    const [question, answer] = startGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(answer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default greeting;
