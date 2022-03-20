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
      <audio id="audio">
        <source src="../Audio/de.wav" type="audio/wav"></source>
      </audio>
      </button>
      <button className="drum-pad" id="W" >
        W
      <audio id="audio1">
        <source src="../Audio/ei.wav" type="audio/wav"></source>
      </audio>
      </button>
      <button className="drum-pad" id="E">
        E
      <audio id="audio2">
        <source src="../Audio/el.wav" type="audio/wav"></source>
      </audio>
      </button>
      <button className="drum-pad" id="A">
        A        
      <audio id="audio3">
        <source src="../Audio/fe.wav" type="audio/wav"></source>
      </audio>
      </button>
      <button className="drum-pad" id="S">
        S
      <audio id="audio4">
        <source src="../Audio/he.wav" type="audio/wav"></source>
      </audio>
      </button>
      <button className="drum-pad" id="D">
        D
      <audio id="audio5">
        <source src="../Audio/ns.wav" type="audio/wav"></source>
      </audio>
      </button>
      <button className="drum-pad" id="Z">
        Z
      <audio id="audio6">
        <source src="../Audio/re.wav" type="audio/wav"></source>
      </audio>
      </button>
      <button className="drum-pad" id="X">
        X
      <audio id="audio7">
        <source src="../Audio/te.wav" type="audio/wav"></source>
      </audio>
      </button>
      <button className="drum-pad" id="C">
        C
      <audio id="audio8">
        <source src="../Audio/cm.wav" type="audio/wav"></source>
      </audio>
      </button>
    </div>
  );

    function playSound(){
    sound.play();
  }

  console.log(sound);


};

export default Drumpad;
