import getGame from '../index.js';

import getRandomNumber from '../randomNumbers.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startGame = () => {
  const number = getRandomNumber(1, 50);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => getGame(taskGame, startGame);
