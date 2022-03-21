import React from "react";
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
  //const [sound, setSound] = useState("");

  /*console.log(sound);*/

  // function playSound(){
  //   sound.play();
  // }

  const handlePlay = (event) => {
    const value = event.target.value;

    switch (value) {
      case "big-thunder-with-rain":
        setDisplayname("big thunder with rain");
        const sound1 = new Audio(clip1);
        sound1.play();
        break;
      case "cinematic-alien-thunder-transition":
        setDisplayname("cinematic alien thunder transition");
        const sound2 = new Audio(clip2);
        sound2.play();
        break;
      case "cinematic-impact-thunder":
        setDisplayname("cinematic impact thunder");
        const sound3 = new Audio(clip3);
        sound3.play();
        break;
      case "cinematic-laser-gun-thunder":
        setDisplayname("cinematic laser gun thunder");
        const sound4 = new Audio(clip4);
        sound4.play();
        break;
      case "cinematic-thunder":
        setDisplayname("cinematic thunder");
        const sound5 = new Audio(clip5);
        sound5.play();
        break;
      case "cinematic-transition-thunder":
        setDisplayname("cinematic transition thunder");
        const sound6 = new Audio(clip6);
        sound6.play();
        break;
      case "light-rain-with-thunderstorm":
        setDisplayname("light rain with thunderstorm");
        const sound7 = new Audio(clip7);
        sound7.play();
        break;
      case "thunder-in-bad-weather":
        setDisplayname("thunder in bad weather");
        const sound8 = new Audio(clip8);
        sound8.play();
        break;
      case "thunderstorm-ambience":
        setDisplayname("thunderstorm ambience");
        const sound9 = new Audio(clip9);
        sound9.play();
        break;
    }
  };

  return (
    <div className={styles.drumpad}>
      <button
        className="drum-pad"
        id="Q"
        onClick={handlePlay}
        value="big-thunder-with-rain"
      >
        Q
      </button>
      <button
        className="drum-pad"
        id="W"
        onClick={handlePlay}
        value="cinematic-alien-thunder-transition"
      >
        W
      </button>
      <button
        className="drum-pad"
        id="E"
        onClick={handlePlay}
        value="cinematic-impact-thunder"
      >
        E
      </button>
      <button
        className="drum-pad"
        id="A"
        onClick={handlePlay}
        value="cinematic-laser-gun-thunder"
      >
        A
      </button>
      <button
        className="drum-pad"
        id="S"
        onClick={handlePlay}
        value="cinematic-thunder"
      >
        S
      </button>
      <button
        className="drum-pad"
        id="D"
        onClick={handlePlay}
        value="cinematic-transition-thunder"
      >
        D
      </button>
      <button
        className="drum-pad"
        id="Z"
        onClick={handlePlay}
        value="light-rain-with-thunderstorm"
      >
        Z
      </button>
      <button
        className="drum-pad"
        id="X"
        onClick={handlePlay}
        value="thunder-in-bad-weather"
      >X</button>
      <button
        className="drum-pad"
        id="C"
        onClick={handlePlay}
        value="thunderstorm-ambience"
      >
        C
      </button>
    </div>
  );
};

export default Drumpad;
