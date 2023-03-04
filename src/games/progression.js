import getGame from '../index.js';

import getRandomNumber from '../randomNumbers.js';

const taskGame = 'What number is missing in the progression?';

const getProgression = (number1, length, step) => {
  const progressionArr = [];
  for (let i = 0; i < length; i += 1) {
    const number = number1 + (step * i);
    progressionArr.push(number);
  }
  return progressionArr;
};

const startGame = () => {
  const number1 = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 5);
  const randomMemberIndex = getRandomNumber(0, length);
  const progressionArr = getProgression(number1, length, step);
  const answer = progressionArr[randomMemberIndex];
  progressionArr[randomMemberIndex] = '..';
  const question = progressionArr.join(' ');
  return [question, answer];
};

export default () => getGame(taskGame, startGame);
