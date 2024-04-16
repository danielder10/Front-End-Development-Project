import React, { useState } from 'react';
import styles from './Game.module.css'; 

const Game = () => {
  const [player, setPlayer] = useState('');
  const [computer, setComputer] = useState('');
  const [result, setResult] = useState('');
  const choicesObject = {
    'rock': { 'rock': 'draw', 'scissor': 'win', 'paper': 'lose' },
    'scissor': { 'rock': 'lose', 'scissor': 'draw', 'paper': 'win' },
    'paper': { 'rock': 'win', 'scissor': 'lose', 'paper': 'draw' }
  };

  const handleButtonClick = (choice) => {
    setPlayer(choice);
    const choices = ["rock", "paper", "scissor"];
    const num = Math.floor(Math.random() * 3);
    const computerChoice = choices[num];

    switch (choicesObject[choice][computerChoice]) {
      case 'win':
        setResult("YOU WIN");
        break;
      case 'lose':
        setResult("YOU LOSE");
        break;
      default:
        setResult("DRAW");
        break;
    }

    setComputer(computerChoice);
  };

  return (
    <div className={styles.gameDiv}>
      <h1 className={styles.gameText} id="playerText">Player: {player}</h1>
      <h1 className={styles.gameText} id="computerText">Computer: {computer}</h1>

      <button className={styles.choiceBtn} onClick={() => handleButtonClick('rock')}>Rock</button>
      <button className={styles.choiceBtn} onClick={() => handleButtonClick('paper')}>Paper</button>
      <button className={styles.choiceBtn} onClick={() => handleButtonClick('scissor')}>Scissor</button>
      
      <p id="result">{result}</p>
    </div>
  );
};

export default Game;
