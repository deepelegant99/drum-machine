import React from "react";
import styles from "./Drumpad.module.css";
import { useState, useEffect } from "react";
import clip1 from "../Media/big-thunder-with-rain.wav";
import clip2 from "../Media/cinematic-alien-thunder-transition.wav";

const Drumpad = ({setDisplayname}) => {
  //const [sound, setSound] = useState("");

  /*console.log(sound);*/

  // function playSound(){
  //   sound.play();
  // }

  const handlePlay = (event) => {
    const value = event.target.value;

    switch(value){
      case 'land':
        setDisplayname('land');
        const sound1 = new Audio(clip1);
        sound1.play();
        break;
      case 'air':
        setDisplayname('air');
        const sound2 = new Audio(clip2);
        sound2.play();
        break;
    }

  }

  return (
    <div className={styles.drumpad}>
      <button className="drum-pad" id="Q" onClick={handlePlay} value="land">
        Q
      </button>
      <button className="drum-pad" id="W" onClick={handlePlay} value='air'>
        W
      </button>
      <button className="drum-pad" id="E">
        E
      </button>
      <button className="drum-pad" id="A">
        A
      </button>
      <button className="drum-pad" id="S">
        S
      </button>
      <button className="drum-pad" id="D">
        D
      </button>
      <button className="drum-pad" id="Z">
        Z
      </button>
      <button className="drum-pad" id="X">
        X
      </button>
      <button className="drum-pad" id="C">
        C
      </button>
    </div>
  );
};

export default Drumpad;
