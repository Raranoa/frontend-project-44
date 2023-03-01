import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const correctOfRounds = 3;

const operatorArray = ['+', '-', '*'];

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const calculation = (number1, number2, operator) => {
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      default:
        throw new Error(`Unkown order state: '${operator}'!`);
    }
  };

  const startGame = () => {
    const number1 = getRandomNumber(1, 20);
    const number2 = getRandomNumber(1, 20);
    const index = getRandomNumber(0, operatorArray.length - 1);
    const chosenOperator = operatorArray[index];
    const operator = chosenOperator;
    const question = `${number1} ${operator} ${number2}`;
    const answer = calculation(number1, number2, operator);
    return [question, answer];
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
