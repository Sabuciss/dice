import { useState } from "react";
import './Dice.css'
import dice1 from "./assets/dice/dice-1.svg";
import dice2 from "./assets/dice/dice-2.svg";
import dice3 from "./assets/dice/dice-3.svg";
import dice4 from "./assets/dice/dice-4.svg";
import dice5 from "./assets/dice/dice-5.svg";
import dice6 from "./assets/dice/dice-6.svg";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
    const [diceValue, setDiceValue] = useState(4);

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceValue(randomNumber); 
    }
  
    return (
      <article className="dice">
        <h2 className="h22">Metamais kauliņš</h2>
        <button onClick={rollDice}>Mest</button>
        <p className="bmw">Jūs uzmetāt <strong>{diceValue}</strong></p>
        <img
            src={diceImages[diceValue - 1]} 
            alt={"Metamais kauliņš " + diceValue}
            width={150}
        />     
       </article>
    );
  }
  
  export default Dice;