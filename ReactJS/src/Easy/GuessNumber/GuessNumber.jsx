import { useState, useEffect } from "react";
import styles from "./GuessNumber.module.css";

const GuessNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [userNumber, setUserNumber] = useState("");
  const [status, setStatus] = useState("");
  const [gameReset, setGameReset] = useState(false);

  // Function to generate a random number
  function genRandomNumber(max, min) {
    const randomVal = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomVal);
  }

  // Handle input change
  function handleInputChange(e) {
    const inputNumber = e.target.value;

    if (inputNumber === "" || isNaN(Number(inputNumber))) {
      setUserNumber(""); // Clear input if it's not a valid number
    } else {
      setUserNumber(Number(inputNumber));
    }
  }

  // Generate a random number on component mount
  useEffect(() => {
    genRandomNumber(0, 20);
  }, []);

  // Check user's guess
  function handleCheckNumber() {
    if (randomNumber === userNumber) {
      setStatus("Your guess is right");
      setGameReset(true); // Disable Check button
    } else if (randomNumber > userNumber) {
      setStatus("Your guess is Less than the actual number");
    } else {
      setStatus("Your guess is Higher than the actual number");
    }

    // Clear the user input after checking
    setUserNumber("");
  }

  // Reset the game
  function handleResetGame() {
    genRandomNumber(0, 20);
    setUserNumber(""); // Clear user input
    setStatus("");
    setGameReset(false); // Enable Check button
  }

  return (
    <>
      <div className={styles.guessApp}>
        <h2 className={styles.heading}>Guess a Number between 0 and 20</h2>

        <div className={styles.guessApp__box}>
          <input
            type="text"
            placeholder="Enter Number"
            value={userNumber} // Bind input value to state
            onChange={handleInputChange}
          />
          <button onClick={handleResetGame}>Reset</button>
          <button onClick={handleCheckNumber} disabled={gameReset}>
            Check
          </button>

          <h3>{status}</h3>
        </div>
      </div>
    </>
  );
};

export default GuessNumber;
