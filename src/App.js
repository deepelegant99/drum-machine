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
      
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

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
