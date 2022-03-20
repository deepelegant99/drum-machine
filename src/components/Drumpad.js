import React from "react";
import styles from "./Drumpad.module.css";
import { useState, useEffect } from "react";
import clip1 from "../Audio/cm.wav";

const Drumpad = () => {

  //const [sound, setSound] = useState("");
  const sound = new Audio(clip1);
  /*console.log(sound);*/

  function playSound(){
    sound.play();
  }

  return (
    <div className={styles.drumpad}>
      <button className="drum-pad" id="Q" onClick={playSound}>
        Q
      </button>
      <button className="drum-pad" id="W" >
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

    function playSound(){
    sound.play();
  }

  console.log(sound);


};

export default Drumpad;
