import { useState } from "react";
import './Flower.css'
import flower from "./assets/flower/flower.svg";

const flowerImage = [flower];

function Flower() {
    const [plucked, setPlucked] = useState(0);

    const result = plucked % 2 === 0 ? "mīl" : "nemīl";
  
    function removePetal() {
      setPlucked(plucked + 1);
  }

  return (
    <article className="flower">
      <h2>Plūcamais zieds</h2>
      <button onClick={removePetal}>Noraut ziedlapu</button>
      <p>Jūs <strong>{result}</strong></p>
      <p>Ziedlapiņas noplūktas: {plucked}</p>
      <img
        src={flowerImage} 
        alt="Zieds"
        width={150}
      />
    </article>
  );
}

export default Flower;
