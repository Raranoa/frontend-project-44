import getGame from '../index.js';

import getRandomNumber from '../randomNumbers.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const startGame = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  return [question, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
