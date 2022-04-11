import styles from "./App.module.css";
import Drumpad from "./components/Drumpad";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [displayname, setDisplayname] = useState("");

  return (
    <div className={styles.App} id="drum-machine">
      <Drumpad setDisplayname={setDisplayname} />
      <Display displayname={displayname} />
    </div>
  );
}

export default App;
