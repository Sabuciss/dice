import { useState } from "react";
import './Coin.css'
import coin from "./assets/coin/coin.svg";
import coins from "./assets/coin/coins.svg";


const coinImages = [coin, coins];

function Coin() {
    const [coinValue, setCoinValue] = useState(2);

    function flipCoin() {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        setCoinValue(randomNumber); 
    }
  
    return (
      <article className="coin">
        <h2 className="h222">Metamā monēta</h2>
        <button onClick={flipCoin}>Mest</button>
        <p className="bm">Jūs uzmetāt <strong>{coinValue === 1 ? "heads" : "tails"}</strong></p>
        <img
            src={coinImages[coinValue - 1]} 
            alt={"Metamā monēta " + coinValue}
            width={150}
        />     
       </article>
    );
  }
  
  export default Coin;