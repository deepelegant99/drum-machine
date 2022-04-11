import React, { useRef } from "react";
import styles from "./Drumpad.module.css";
import { useState, useEffect } from "react";
import clip1 from "../Media/big-thunder-with-rain.wav";
import clip2 from "../Media/cinematic-alien-thunder-transition.wav";
import clip3 from "../Media/cinematic-impact-thunder.wav";
import clip4 from "../Media/cinematic-laser-gun-thunder.wav";
import clip5 from "../Media/cinematic-thunder.wav";
import clip6 from "../Media/cinematic-transition-thunder.wav";
import clip7 from "../Media/light-rain-with-thunderstorm.wav";
import clip8 from "../Media/thunder-in-bad-weather.wav";
import clip9 from "../Media/thunderstorm-ambience.wav";

const Drumpad = ({ setDisplayname }) => {
  const sound = useRef(null); 

  const play = ()=>{
    sound.current.currentTime=0;
    sound.current.play();
  }

  return (
    <div className={styles.drumpad}>
      <>
        <audio src={clip1} ref={sound} id='Q'></audio>
        <button onClick={play}>Q</button>
      </>
     
      <button className="drum-pad" id="W">
        <audio src={clip2} className="clip" id='W'>W</audio>
      </button>
      <button className="drum-pad" id="E">
        <audio src={clip3} className='clip' id='E'>E</audio>
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
