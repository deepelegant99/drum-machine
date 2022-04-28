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

const Drumpad = ({ setDisplayname, play}) => {
 

  return (
    <div className={styles.drumpad}>
      <button
        key='Q'
        className="drum-pad"
        onClick={() => play('Q')}
      >
        <audio className="clip" id='Q' src={clip1}></audio>
       Q
      </button>
    </div>
  );
};

export default Drumpad;
