import styles from "./App.module.css";
import Drumpad from "./components/Drumpad";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [displayname, setDisplayname] = useState("");
  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();

    setDisplayname(key);
    setTimeout(() => {
      setDisplayname("");
    }, 5000);
  };
  return (
    <div className={styles.App} id="drum-machine">
      <Drumpad setDisplayname={setDisplayname} play={play} />
      <Display displayname={displayname} />
    </div>
  );
}

export default App;
