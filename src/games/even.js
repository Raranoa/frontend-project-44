import getGame from '../index.js';

import getRandomNumber from '../randomNumbers.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startGame = () => {
  const number = getRandomNumber(1, 50);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
