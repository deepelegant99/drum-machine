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

const Drumpad = ({ play }) => {
  return (
    <div className={styles.drumpad}>
      <button key="Q" className="drum-pad" id='q' onClick={() => play("Q")}>
        <audio className="clip" id="Q" src={clip1}></audio>Q
      </button>
      <button key="W" className="drum-pad" id='w' onClick={() => play("W")}>
        <audio className="clip" id="W" src={clip2}></audio>W
      </button>
      <button key="E" className="drum-pad" id='e' onClick={() => play("E")}>
        <audio className="clip" id="E" src={clip3}></audio>E
      </button>
      <button key="A" className="drum-pad" id='a' onClick={() => play("A")}>
        <audio className="clip" id="A" src={clip4}></audio>A
      </button>
      <button key="S" className="drum-pad" id='s' onClick={() => play("S")}>
        <audio className="clip" id="S" src={clip5}></audio>S
      </button>
      <button key="D" className="drum-pad" id='d' onClick={() => play("D")}>
        <audio className="clip" id="D" src={clip6}></audio>D
      </button>
      <button key="Z" className="drum-pad" id='z' onClick={() => play("Z")}>
        <audio className="clip" id="Z" src={clip7}></audio>Z
      </button>
      <button key="X" className="drum-pad" id='x' onClick={() => play("X")}>
        <audio className="clip" id="X" src={clip8}></audio>X
      </button>
      <button key="C" className="drum-pad" id='c' onClick={() => play("C")}>
        <audio className="clip" id="C" src={clip9}></audio>C
      </button>
    </div>
  );
};

export default Drumpad;
