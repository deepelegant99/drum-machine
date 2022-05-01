import styles from "./App.module.css";
import Drumpad from "./components/Drumpad";
import Display from "./components/Display";
import { useState, useEffect } from "react";
function App() {
  const [displayname, setDisplayname] = useState("");

  const handleKeydown = (event) => {
    switch (event.keyCode) {
      case 81:
        play("Q");
        break;
      case 87:
        play("W");
        break;
      case 69:
        play("E");
        break;
      case 65:
        play("A");
        break;
      case 83:
        play("S");
        break;
      case 68:
        play("D");
        break;
      case 90:
        play("Z");
        break;
      case 88:
        play("X");
        break;
      case 67:
        play("C");
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();

    switch (key) {
      case "Q":
        setDisplayname("Big Thunder with Rain");
        break;
      case "W":
        setDisplayname("Cinematic Alien thunder transition");
        break;
      case "E":
        setDisplayname("Cinematic impact thunder");
        break;
      case "A":
        setDisplayname("Cinematic laser gun thunder");
        break;
      case "S":
        setDisplayname("Cinematic thunder");
        break;
      case "D":
        setDisplayname("Cinematic transition thunder");
        break;
      case "Z":
        setDisplayname("Light Rain with thunderstorm");
        break;
      case "X":
        setDisplayname("Thunder in bad weather");
        break;
      case "C":
        setDisplayname("Thunderstorm Ambience");
        break;
      default:
        setDisplayname("");
    }

    setTimeout(() => {
      setDisplayname("");
    }, 5000);
  };
  return (
    <div className={styles.App} id="drum-machine">
      <Drumpad play={play} />
      <Display displayname={displayname} />
    </div>
  );
}

export default App;
