import React from "react";
import styles from "./Drumpad.module.css";

const Drumpad = () => {
  return (
    <div className={styles.drumpad}>
      <button className="drum-pad" id="Q">
        Q
      </button>
      <button className="drum-pad" id="W">
        W
      </button>
      <button className="drum-pad" id="E">
        E
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
