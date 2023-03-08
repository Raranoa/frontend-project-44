import getGame from '../index.js';

import getRandomNumber from '../randomNumbers.js';

const taskGame = 'What number is missing in the progression?';

const getProgression = (number1, lengthStep, progresLength) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(number1 + (lengthStep * i));
  }
  return progression;
};

const startGame = () => {
  const progressionLength = getRandomNumber(5, 10);
  const firstNumber = getRandomNumber(1, 10);
  const lengthStep = getRandomNumber(2, 6);
  const progression = getProgression(firstNumber, lengthStep, progressionLength);
  const finishNumber = getRandomNumber(0, getProgression.length - 1);
  const correctAnswer = progression[finishNumber];
  progression[finishNumber] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => getGame(taskGame, startGame);
