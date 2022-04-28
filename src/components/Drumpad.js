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
  const sound1 = useRef(null);
  const sound2 = useRef(null);
  const sound3 = useRef(null);
  const sound4 = useRef(null);
  const sound5 = useRef(null);
  const sound6 = useRef(null);
  const sound7 = useRef(null);
  const sound8 = useRef(null);
  const sound9 = useRef(null);

  const play1 = (e) => {
    sound1.current.currentTime = 0;
    sound1.current.play();
    setDisplayname(e.target.name);
  };
  const play2 = (e) => {
    sound2.current.currentTime = 0;
    sound2.current.play();
    setDisplayname(e.target.name);
  };
  const play3 = (e) => {
    sound3.current.currentTime = 0;
    sound3.current.play();
    setDisplayname(e.target.name);
  };
  const play4 = (e) => {
    sound4.current.currentTime = 0;
    sound4.current.play();
    setDisplayname(e.target.name);
  };
  const play5 = (e) => {
    sound5.current.currentTime = 0;
    sound5.current.play();
    setDisplayname(e.target.name);
  };
  const play6 = (e) => {
    sound6.current.currentTime = 0;
    sound6.current.play();
    setDisplayname(e.target.name);
  };
  const play7 = (e) => {
    sound7.current.currentTime = 0;
    sound7.current.play();
    setDisplayname(e.target.name);
  };
  const play8 = (e) => {
    sound8.current.currentTime = 0;
    sound8.current.play();
    setDisplayname(e.target.name);
  };
  const play9 = (e) => {
    sound9.current.currentTime = 0;
    sound9.current.play();
    setDisplayname(e.target.name);
  };

  setTimeout(() => {
    setDisplayname("");
  }, 10000);

  return (
    <div className={styles.drumpad}>
      <>
        <button
          onClick={play1}
          name="big thunder with rain"
          className="drum-pad"
          id="Q"
          type="button"
        >
          <audio
            src={clip1}
            ref={sound1}
            id="Q"
            className="clip"
            type="audio/mpeg"
          ></audio>
          Q
        </button>
      </>
      <>
        <button
          onClick={play2}
          name="cinematic alien thuder transition"
          className="drum-pad"
          id="W"
          type="button"
        >
          <audio
            src={clip2}
            ref={sound2}
            id="W"
            className="clip"
            type="audio/mpeg"
          ></audio>
          W
        </button>
      </>
      <>
        <button
          onClick={play3}
          name="cinematic impact thunder"
          className="drum-pad"
          id="E"
          type="button"
        >
          <audio
            src={clip3}
            ref={sound3}
            id="E"
            className="clip"
            type="audio/mpeg"
          ></audio>
          E
        </button>
      </>
      <>
        <button
          onClick={play4}
          name="cinematic laser gun thunder"
          className="drum-pad"
          id="A"
          type="button"
        >
          <audio
            src={clip4}
            ref={sound4}
            id="A"
            className="clip"
            type="audio/mpeg"
          ></audio>
          A
        </button>
      </>
      <>
        <button
          onClick={play5}
          name="cinematic thunder"
          className="drum-pad"
          id="S"
          type="button"
        >
          <audio
            src={clip5}
            ref={sound5}
            id="S"
            className="clip"
            type="audio/mpeg"
          ></audio>
          S
        </button>
      </>
      <>
        <button
          onClick={play6}
          name="cinematic transition thunder"
          className="drum-pad"
          id="D"
          type="button"
        >
          <audio
            src={clip6}
            ref={sound6}
            id="D"
            className="clip"
            type="audio/mpeg"
          ></audio>
          D
        </button>
      </>
      <>
        <button
          onClick={play7}
          name="light rain with thunderstorm"
          className="drum-pad"
          id="Z"
          type="button"
        >
          <audio
            src={clip7}
            ref={sound7}
            id="Z"
            className="clip"
            type="audio/mpeg"
          ></audio>
          Z
        </button>
      </>
      <>
        <button
          onClick={play8}
          name="thunder in bad weather"
          className="drum-pad"
          id="X"
          type="button"
        >
          <audio
            src={clip8}
            ref={sound8}
            id="X"
            className="clip"
            type="audio/mpeg"
          ></audio>
          X
        </button>
      </>
      <>
        <button
          onClick={play9}
          name="thunderstorm ambience"
          className="drum-pad"
          id="C"
          type="button"
        >
          <audio
            src={clip9}
            ref={sound9}
            id="C"
            className="clip"
            type="audio/mpeg"
          ></audio>
          C
        </button>
      </>
    </div>
  );
};

export default Drumpad;
